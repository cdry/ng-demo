import { Directive, ElementRef, AfterViewInit, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[myButton]'
})
export class AttributeDirective implements AfterViewInit {
	//获取输入
	@Input('myButton') name: string;
	//模版元素
	@Input() temp:HTMLElement;

	constructor(
		private er: ElementRef,
		private renderer2: Renderer2
	) { }
	
	ngAfterViewInit() {
		console.log('注入的ng类',this.renderer2, this.er)
		
		//增加类名
		this.renderer2.addClass(this.er.nativeElement, 'btn');

		//增加元素
		let spanEle = document.createElement('span');
		spanEle.innerHTML = '插入的元素';
		this.renderer2.appendChild(this.er.nativeElement,spanEle);

		//获取页面上的元素
		console.log('获取的输入元素',this.temp);
		this.renderer2.appendChild(this.er.nativeElement,this.temp);

		//
		this.renderer2.createElement('');
	}
	//绑定属性
	@HostBinding('style.font-size') fontSize = '20px';
	//绑定事件
	@HostListener('click') onclick() {
		alert('你输入了' + this.name);
	}
}
