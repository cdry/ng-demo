import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';


@Directive({
	selector: '[myIf]'
})
export class StructuralDirective {

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef
	) { }
	@Input() set myIf(condition: boolean) {
		console.log(this.viewContainer,this.templateRef)
		if (condition) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainer.clear();
		}
	}
}
