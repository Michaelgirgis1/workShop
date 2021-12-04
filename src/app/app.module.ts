import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AboutComponent } from './components/about/about.component';
import { FawateerServiceComponent } from './components/fawateer-service/fawateer-service.component';
import { FeaturesComponent } from './components/features/features.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    MainBannerComponent,
    AboutComponent,
    FawateerServiceComponent,
    FeaturesComponent,
    BenefitsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
