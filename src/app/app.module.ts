import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Homepage22Component } from './homepage22/homepage22.component';
import { Homepage25Component } from './homepage25/homepage25.component';
import { Homepage17Component } from './homepage17/homepage17.component';
import { Homepage19Component } from './homepage19/homepage19.component';
import { Homepage23Component } from './homepage23/homepage23.component';
import { NavbarSlideComponent } from './navbar-slide/navbar-slide.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { HomeGoogleComponent } from './home-google/home-google.component';
import { FormsModule } from '@angular/forms';
import { HomemodelComponent } from './homemodel/homemodel.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Homepage22Component,
    Homepage25Component,
    Homepage17Component,
    Homepage19Component,
    Homepage23Component,
    NavbarSlideComponent,
    HomeNewComponent,
    HomeGoogleComponent,
    HomemodelComponent,
    ScrollspyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
