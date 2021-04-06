import { Component, DoCheck, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IProduct } from '../products/IProduct';
import { ShareDataService } from '../share-data.service';

function priceRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
      return { "priceRange": true }
    }
    return null;
  }
}

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private shareService: ShareDataService) { }
  defaultData: IProduct = this.shareService.product
  // data : number = 0 ;
  updateForm: FormGroup;
  minPrice: number = 0;
  maxPrice: number = 1000;
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      Id: new FormControl(this.defaultData.Id, [Validators.required]),
      Name: new FormControl(this.defaultData.Name, [Validators.required]),
      Price: new FormControl(this.defaultData.Price, [priceRangeValidator(this.minPrice, this.maxPrice), Validators.required]),
      ExpiryDate: new FormControl(this.defaultData.ExpiryDate, [Validators.required]),
      Quantity: new FormControl(this.defaultData.Quantity, [Validators.required]),
      isInstock: new FormControl(this.defaultData.isInstock)
    });

  }
  setData() {
    this.shareService.setProduct(this.updateForm.value);
  }
  reset() {
    this.updateForm.reset();
  }
}