import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitacoraComponent } from './components/watchlog/bitacora/bitacora.component';
import { BitacoraFormComponent } from './components/watchlog/bitacora-form/bitacora-form.component';
import { NavbarComponent } from "./components/flayout/navbar/navbar.component";
import { MenuComponent } from "./components/flayout/menu/menu.component";
import { FooterComponent } from "./components/flayout/footer/footer.component";



@NgModule({
  declarations: [
    AppComponent,
    BitacoraComponent,
    BitacoraFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    MenuComponent,
    FooterComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
