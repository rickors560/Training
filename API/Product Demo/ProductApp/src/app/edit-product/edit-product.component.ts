import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products$: Observable<IProduct[]>;
  selectidControl: FormControl = new FormControl(0);
  selectDisable: boolean = false;
  showProductDetails: boolean = false;
  editform: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, private myservice: AppService,
    private router: Router, private activatedroute: ActivatedRoute) {

    this.products$ = new Observable<IProduct[]>();

    this.editform = this.fb.group({
      title: ['', Validators.required],
      price: [, [Validators.required, Validators.min(0)]],
      quantity: [, [Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
      expirydate: ['', Validators.required],
      instock: [true, Validators.required]
    });
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (this.id > 0) {
        this.selectidControl.setValue(this.id);
        this.selectDisable = true;
        this.showDetails();
      }
    });

    this.products$ = this.myservice.getProducts();
  }
  
  showDetails() {
    if (this.selectidControl.value != "0") {
      this.showProductDetails = true;
      this.myservice.getProduct(this.selectidControl.value).subscribe(
        data => {
          this.editform.get('title').setValue(data.title);
          this.editform.get('price').setValue(data.price);
          this.editform.get('quantity').setValue(data.quantity);
          this.editform.get('color').setValue(data.color);
          this.editform.get('expirydate').setValue(data.expiryDate);
          this.editform.get('instock').setValue(data.inStock);
        }
      );
    }
    else {
      this.showProductDetails = false;
    }
  }

  update() {
    let product: IProduct = { ...this.editform.value };
    product.id = Number(this.selectidControl.value);
    this.myservice.putProduct(product).subscribe(
      () => {
        if (this.id > 0) {
          this.router.navigate(['/']);
        }
        else {
          this.selectidControl.setValue(0);
          this.showProductDetails = false;
        }
      }
    );
  }
}