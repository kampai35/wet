import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent
  ],
  exports: [
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class ComponentsModule { }
