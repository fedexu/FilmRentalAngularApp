import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material/material.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './shared/loader.service';
import { StickyDirective } from './shared/directive/sticky.directive';
import { RippleEffectDirective } from './shared/directive/ripple-effect.directive';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    PageNotFoundComponent,
    StickyDirective,
    LoaderComponent,
    RippleEffectDirective
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
