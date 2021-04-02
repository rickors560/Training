import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class MyErrorHandlerService implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
    console.log("Error log will be send to Api.");
  }
}
