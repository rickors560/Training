import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgularDemo';
  shareDataDemo = false;
  flag = true;
  shareData(){
    this.shareDataDemo = true;
    this.flag = false;
  }
  // showDataBindingDemo = false;
  // showStructuralDirectiveDemo = false;
  // showMasterDetailsDemo = false;
  // showDataBinding():void{
  //   this.showDataBindingDemo = true;
  //   this.showStructuralDirectiveDemo = false;
  //   this.showMasterDetailsDemo = false;
  // }
  // showStructuralDirective():void{
  //   this.showStructuralDirectiveDemo = true;
  //   this.showDataBindingDemo = false;
  //   this.showMasterDetailsDemo = false;
  // }
  // showMasterDetails():void{
  //   this.showMasterDetailsDemo = true;
  //   this.showStructuralDirectiveDemo = false;
  //   this.showDataBindingDemo = false;
  // }
}
