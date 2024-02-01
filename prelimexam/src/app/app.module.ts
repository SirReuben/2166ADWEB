import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurpartnersComponent } from './ourpartners/ourpartners.component';
import { AboutComponent } from './about/about.component';
import { JoinusComponent } from './joinus/joinus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurpartnersComponent,
    AboutComponent,
    JoinusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
