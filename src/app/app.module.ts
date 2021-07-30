import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RockpaperscissorComponent } from './rockpaperscissor/rockpaperscissor.component';

@NgModule({
  declarations: [
    AppComponent,
    RockpaperscissorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
