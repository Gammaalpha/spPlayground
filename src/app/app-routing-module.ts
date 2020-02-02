import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
// import { Routes, RouterModule } from '@angular/router';
import { UIRouterModule } from "@uirouter/angular";
import { AboutComponent } from './pages/about/about.component';


const states = [
  {
    name: 'home',
    url: "/home",
    component: HomeComponent
  },
  {
    name: 'about',
    url: "/about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [UIRouterModule.forRoot({ states: states, useHash: true })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
