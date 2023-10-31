import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { ReadComponent } from './read/read.component';
import { ReadModule } from './read/read.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    ReadModule,
    FooterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
