import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  conseguir_todos_pokemon(){
    return this.http.get('http://localhost:3000/todos-pokemon')
  }

  busqueda_pokemon(ruta:any){
    return this.http.get('http://localhost:3000/'+ruta);
  }
}
