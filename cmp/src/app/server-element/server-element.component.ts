import { Component,
				 OnInit,
				 Input,
				 OnChanges,
				 SimpleChanges,
				 DoCheck,
				 AfterContentInit,
				 AfterContentChecked,
				 OnDestroy,
				 ViewChild,
				 ElementRef,
				 AfterViewInit,
				 ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
																							 OnChanges,
																							 DoCheck,
																							 AfterContentInit,
																							 AfterContentChecked,
																							 OnDestroy,
																							 AfterViewInit {
	@Input('svrElement') element: {type: string, name: string, content: string};
	@ViewChild('heading') header: ElementRef;
	@ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() {
  	console.log('constructor called');
  }

  ngOnInit() {
  	console.log('ng-init called');
  	console.log('text-content       '+this.header.nativeElement.textContent);
  	console.log('text-content of paragraph      '+this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes){
  	console.log('changes   '+ JSON.stringify(changes));
  }

  ngDoCheck(){
  	console.log('ng-DoCheck called');
  }

  ngAfterContentInit(){
  	console.log('ng-AfterContentInit called');
  	console.log('text-content of paragraph      '+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
  	console.log('ng-AfterContentChecked called');
  }
  ngOnDestroy(){
  	console.log('ng-OnDestroy called');
  }

  ngAfterViewInit(){
  	console.log('text-content2       '+this.header.nativeElement.textContent);
  }
}
