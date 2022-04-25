import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PokemonService } from 'src/app/servicio/pokemon.service';

@Component({
  selector: 'app-pantalla-pokemon',
  templateUrl: './pantalla-pokemon.component.html',
  styleUrls: ['./pantalla-pokemon.component.css']
})
export class PantallaPokemonComponent implements OnInit {
  pokemons:any = [];
  Nombre = localStorage.getItem("nombre");
  public buscaformu !:FormGroup;
  
  constructor(private formBuilder: FormBuilder,private pokeService:PokemonService) { }

  ngOnInit(): void {
    this.todos_poke();
    this.buscaformu = this.formBuilder.group({
      seleccion:[""],
      busqueda: [""]
      });
  }

  todos_poke(){
    this.pokemons = [];
    this.pokeService.conseguir_todos_pokemon().subscribe((res:any)=>{
      res.forEach((pokemon:any,clave:any) => {
        this.pokemons.push(pokemon);
      });
    });
  }

  encontrar(){
    if(this.buscaformu.value.seleccion == "todos"){
      this.todos_poke();
    }else{
      this.pokemons = [];
      this.pokeService.busqueda_pokemon(this.hacer_ruta()).subscribe((res:any)=>{
      res.forEach((pokemon:any,clave:any) => {
        this.pokemons.push(pokemon);
      });
    });
    }
  }

  hacer_ruta(){
    var b=this.buscaformu.value.busqueda;
    if(this.buscaformu.value.seleccion == "tipo"){
      return `consePorTipo/${b}`;
    }else if(this.buscaformu.value.seleccion == "nombre"){
      return `consePorNombre/${b}`;
    } else if(this.buscaformu.value.seleccion == "id"){
      return `consePorId/${b}`;
    }else{
      return "";
    }
      
  }
}
