import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from './IProduct';
import { tap, catchError, switchMap, finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  private myerrorhandler(err: any) {
    console.log(err);
    return throwError(err);
  }

  openSnackBar(msg:string) {
    this._snackBar.open(msg, "Ok", {
      duration: 2000
    });
  }

  getProducts(): Observable<IProduct[]> {
    const apiurl = environment.apibaseurl + 'Products';
    const headers = { 'content-type': 'application/json' };
    return this.http.get<IProduct[]>(apiurl, { 'headers': headers }).pipe(
      //tap(data=>console.log(data)), // only to see data in see console what is coming
      catchError(
        //error => {return throwError(error);}
        error => this.myerrorhandler(error)
      )
    );
  }

  getProduct(id: number): Observable<IProduct> {
    const apiurl = environment.apibaseurl + 'Products/' + id;
    const headers = { 'content-type': 'application/json' };
    return this.http.get<IProduct>(apiurl, { 'headers': headers }).pipe(
      catchError(error => this.myerrorhandler(error))
    );
  }

  postProduct(product: IProduct): Observable<IProduct> {
    Object.defineProperty(product, 'id', { 'enumerable': false }); // so that id won't go to api
    const apiurl = environment.apibaseurl + 'Products';
    const headers = { 'accept': 'application/json', 'content-type': 'application/json' };
    return this.http.post<IProduct>(apiurl, product, { 'headers': headers }).pipe(
      catchError(error => this.myerrorhandler(error)),
      finalize(()=> this.openSnackBar("Added Successfully!!")) // run when it completes successfully
    );
  }

  putProduct(product: IProduct): Observable<IProduct> {
    const apiurl = environment.apibaseurl + 'Products/' + product.id;
    const headers = { 'accept': 'application/json', 'content-type': 'application/json' };
    return this.http.put<IProduct>(apiurl, product, { 'headers': headers }).pipe(
      catchError(error => this.myerrorhandler(error)),
      finalize(()=> this.openSnackBar("Edited Successfully!!"))
    );
  }

  deleteProduct(id: number): Observable<IProduct> {
    const apiurl = environment.apibaseurl + 'Products/' + id;
    const headers = { 'accept': 'application/json', 'content-type': 'application/json' };
    return this.http.delete<IProduct>(apiurl, { 'headers': headers }).pipe(
      catchError(error => this.myerrorhandler(error)),
      finalize(()=> this.openSnackBar("Deleted Successfully!!"))
    );
  }
}