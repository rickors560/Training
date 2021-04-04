import { Component, Inject, OnInit } from '@angular/core';
import { IApiConfig } from '../ApiConfig';
import { API } from '../ApiToken';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(@Inject(API) private apidata: IApiConfig) { }
  url : string;
  pass : string;
  ngOnInit(): void {
    this.url = this.apidata.url;
    this.pass = this.apidata.password;
  }
}
