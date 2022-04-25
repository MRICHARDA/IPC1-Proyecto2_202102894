import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPokemonComponent } from './componente/pantalla-pokemon/pantalla-pokemon.component';
import { PantallaLoginComponent } from './componente/pantalla-login/pantalla-login.component';

const routes: Routes = [
  {
    path: "pokeapi",
    component: PantallaPokemonComponent
  },
  {
    path: "",
    component: PantallaLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
