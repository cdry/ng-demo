import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttributeDirective } from './attribute/attribute.directive';
import { StructuralDirective } from './structural/structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirective,
    StructuralDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
