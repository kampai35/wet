import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    ContactBarComponent
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    ContactBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule, //do usuniecia
    MatMenuModule,
    MatButtonModule
  ]
})
export class ComponentsModule { }
