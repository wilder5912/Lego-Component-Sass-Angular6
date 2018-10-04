import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { BootstrapDesignerModule } from '../../bootstrap-designer/bootstrap-designer.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BootstrapDesignerModule
  ],
  declarations: [HomeComponent],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
