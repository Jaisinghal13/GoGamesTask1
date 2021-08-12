import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Homepage17Component } from './homepage17/homepage17.component';
import { Homepage22Component } from './homepage22/homepage22.component';
import { Homepage25Component } from './homepage25/homepage25.component';
import { Homepage19Component } from './homepage19/homepage19.component';
import { Homepage23Component } from './homepage23/homepage23.component';
import { NavbarSlideComponent } from './navbar-slide/navbar-slide.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { HomeGoogleComponent } from './home-google/home-google.component';
import { HomemodelComponent } from './homemodel/homemodel.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { NavbarphotoComponent } from './navbarphoto/navbarphoto.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'homepage22',
    component: Homepage22Component,
  },
  {
    path: 'homepage25',
    component: Homepage25Component,
  },
  {
    path: 'homepage17',
    component: Homepage17Component,
  },
  {
    path: 'homepage19',
    component: Homepage19Component,
  },
  {
    path: 'homepage23',
    component: Homepage23Component,
  },
  {
    path: 'navbar-slide',
    component: NavbarSlideComponent,
  },
  {
    path: 'homenew',
    component: HomeNewComponent,
  },
  {
    path: 'home-google',
    component: HomeGoogleComponent,
  },
  {
    path: 'home-model',
    component: HomemodelComponent,
  },
  {
    path: 'scrollspy',
    component: ScrollspyComponent,
  },
  {
    path: 'navbarphoto',
    component: NavbarphotoComponent,
  },
  { path: '', redirectTo: 'navbarphoto', pathMatch: 'full' },
  { path: '**', component: NavbarphotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
