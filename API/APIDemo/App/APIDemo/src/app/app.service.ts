import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './IProduct';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]>{
    const apiurl = environment.apibaseurl + 'cal/products';
    const headers = {'content-type':'application/json'};
    return this.http.get<Product[]>(apiurl,{'headers':headers}).pipe(
      tap(data=>console.log(data)),
      catchError(
        //error => {return throwError(error);}
        error => this.myerrorhandler(error)
      )
    );
  }
  private myerrorhandler(err: any){
    console.log(err);
    return throwError(err);
  }
}
