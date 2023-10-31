import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SecondPageModule } from './second-page/second-page.module';


@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SecondPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
