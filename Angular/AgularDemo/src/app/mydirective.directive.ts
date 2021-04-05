import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
  @Input() color: string ;
  @HostBinding('style.border') hostborder :string;
  constructor(private el : ElementRef, private renderer:Renderer2 ) {
    this.changeColor('red');
  }
  changeColor(c:string){
    this.renderer.setStyle(this.el.nativeElement,'color', c);
  }
  @HostListener('mouseenter') abc(){
    this.changeColor(this.color);
    this.hostborder = "5px solid green";
  }
  @HostListener('mouseleave') foo(){
    this.changeColor('blue');
    this.hostborder = "";
  }
}
