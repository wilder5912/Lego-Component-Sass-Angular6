import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@NgModule({
  imports: [
    AccordionModule.forRoot()
  ],
  exports: [
    AccordionModule
  ],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BootstrapDesignerModule { }
