import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SpPlaygroundWebPartComponent } from './sp-playground-web-part/sp-playground-web-part.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    SpPlaygroundWebPartComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [SpPlaygroundWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(SpPlaygroundWebPartComponent, { injector: this.injector });
    customElements.define('app-sp-playground-web-part', el);
  }
}
