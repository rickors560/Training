import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IToDoItem } from './IToDoItems';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  private myerrorhandler(err: any){
    console.log(err);
    return throwError(err);
  }
  getToDoItems(): Observable<IToDoItem[]>{
    const apiurl = environment.apibaseurl + 'mytask/items';
    const headers = {'content-type':'application/json'};
    return this.http.get<IToDoItem[]>(apiurl,{'headers':headers}).pipe(
      //tap(data=>console.log(data)),
      catchError(
        //error => {return throwError(error);}
        error => this.myerrorhandler(error)
      )
    );
  }
  postToDoItem(task: IToDoItem): Observable<IToDoItem> {
    const apiurl = environment.apibaseurl + 'mytask/items';
    const headers = {'accept':'application/json','content-type':'application/json'};
    return this.http.post<IToDoItem>(apiurl, task,{'headers':headers}).pipe(
      catchError( error => this.myerrorhandler(error) )
    );
  }
  putToDoItem(task: IToDoItem): Observable<IToDoItem> {
    const apiurl = environment.apibaseurl + 'mytask/items/'+ task.id;
    const headers = {'accept':'application/json','content-type':'application/json'};
    return this.http.put<IToDoItem>(apiurl, task,{'headers':headers}).pipe(
      catchError( error => this.myerrorhandler(error) )
    );
  }
  deleteToDoItem(task: IToDoItem): Observable<IToDoItem>{
    const apiurl = environment.apibaseurl + 'mytask/items/'+ task.id;
    const headers = {'accept':'application/json','content-type':'application/json'};
    return this.http.delete<IToDoItem>(apiurl,{'headers':headers}).pipe(
      catchError( error => this.myerrorhandler(error) )
    ); 
  }
}