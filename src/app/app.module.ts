import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardBsComponent } from './card-bs/card-bs.component';
import { PolicyComponent } from './policy/policy.component';
import { PolicyProductComponent } from './policy-product/policy-product.component';
import { PartnersComponent } from './partners/partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { BannersComponent } from './banners/banners.component';
import { BannerSlideComponent } from './banner-slide/banner-slide.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { HeaderComponent } from './header/header.component';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardBsComponent,
    PolicyComponent,
    PolicyProductComponent,
    PartnersComponent,
    FooterComponent,
    BannersComponent,
    BannerSlideComponent,
    BestSellingComponent,
    HeaderComponent,
    CustompipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
