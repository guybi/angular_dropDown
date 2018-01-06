import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { SelectFieldInFormComponent } from './select-field-in-form/select-field-in-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    ReactiveFormExampleComponent,
    SelectFieldInFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
