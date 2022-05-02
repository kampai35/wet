import { ShopComponent } from './shop/shop.component';
import { RehComponent } from './reh/reh.component';
import { RangeOfServicesComponent } from './range-of-services/range-of-services.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AdviceComponent } from './advice/advice.component';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    AboutUsComponent,
    AdviceComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    RangeOfServicesComponent,
    RehComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ComponentsModule,
    MatGridListModule,
    MatCarouselModule
  ]
})
export class PagesModule { }
