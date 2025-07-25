import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageVideoCarouselComponent } from './components/image-video-carousel/image-video-carousel.component';
import { CustomTabComponent } from './components/custom-tab/custom-tab.component';
import { DonationInfoComponent } from './components/donation-info/donation-info.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  NavbarComponent,
  ImageVideoCarouselComponent,
  CustomTabComponent,
  DonationInfoComponent,
  FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
