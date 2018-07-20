import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
	@Input() defaultColor: string = 'purple';
	@Input() highlightColor: string = 'red';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  ngOnInit(){
  	//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
  	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  	// this.backgroundColor = 'blue';
  	this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') mouseleave(eventData: Event) {
  	//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	// this.backgroundColor = 'yellow';
  	this.backgroundColor = this.defaultColor;
	}

}
