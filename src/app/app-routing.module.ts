import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AdviceComponent } from './pages/advice/advice.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RangeOfServicesComponent } from './pages/range-of-services/range-of-services.component';
import { RehComponent } from './pages/reh/reh.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'o-nas', component: AboutUsComponent},
  {path: 'rehabilitacja', component: RehComponent},
  {path: 'zakres-uslug', component: RangeOfServicesComponent},
  {path: 'galeria', component: GalleryComponent},
  {path: 'porady', component: AdviceComponent},
  {path: 'sklep', component: ShopComponent},
  {path: 'kontakt', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
