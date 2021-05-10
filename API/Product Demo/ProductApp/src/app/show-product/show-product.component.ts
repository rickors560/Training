import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  detailsform: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, private myservice: AppService,
    private router: Router, private activatedroute: ActivatedRoute) {

    this.detailsform = this.fb.group({
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
    });

    this.myservice.getProduct(this.id).subscribe(
      data => {
        this.detailsform.get('title').setValue(data.title);
        this.detailsform.get('price').setValue(data.price);
        this.detailsform.get('quantity').setValue(data.quantity);
        this.detailsform.get('color').setValue(data.color);
        this.detailsform.get('expirydate').setValue(data.expiryDate);
        this.detailsform.get('instock').setValue(data.inStock);
      }
    );
  }

  delete() {
    this.myservice.deleteProduct(this.id).subscribe(
      () => {
        this.router.navigate(["/"]);
      }
    );
  }
}