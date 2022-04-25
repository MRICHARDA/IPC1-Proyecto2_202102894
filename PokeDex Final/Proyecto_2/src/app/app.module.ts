import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaPokemonComponent } from './componente/pantalla-pokemon/pantalla-pokemon.component';
import { PantallaLoginComponent } from './componente/pantalla-login/pantalla-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaPokemonComponent,
    PantallaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
