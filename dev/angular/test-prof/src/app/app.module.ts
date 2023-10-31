import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { SliderComponent } from './slider/slider.component';
import { SliderModule } from './slider/slider.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    SliderModule
    
  ],
  exports:[SliderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
