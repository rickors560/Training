import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgularDemo';
  showDataBindingDemo = false;
  showStructuralDirectiveDemo = false;
  showDataBinding():void{
    this.showDataBindingDemo = true;
    this.showStructuralDirectiveDemo = false;
  }
  showStructuralDirective():void{
    this.showStructuralDirectiveDemo = true;
    this.showDataBindingDemo = false;
  }
}