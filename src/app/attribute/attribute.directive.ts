import { Directive, ElementRef, AfterViewInit, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[myButton]'
})
export class AttributeDirective implements AfterViewInit {

	@Input('myButton') name: string;

	constructor(
		private er: ElementRef,
		private renderer2: Renderer2
	) { }
	
	ngAfterViewInit() {
		console.log(this.renderer2, this.er)
		this.renderer2.addClass(this.er.nativeElement, 'btn');
	}

	@HostBinding('style.font-size') fontSize = '20px';
	@HostListener('click') onclick() {
		alert('你输入了' + this.name);
	}
}
