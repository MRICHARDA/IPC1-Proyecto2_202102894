import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserService } from 'src/app/servicio/loginser.service';

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.css']
})
export class PantallaLoginComponent implements OnInit {

  public Loginformu !:FormGroup;

  constructor(private formBuilder: FormBuilder, private Loginservice: LoginserService , private router: Router) { }

  ngOnInit(): void {
    this.Loginformu = this.formBuilder.group({
    Usuario:[""],
    Clave: [""]
    });
  }

  acceso(){
    console.log(this.Loginformu.value);
    this.Loginservice.entrar().subscribe ((res:any) => {
      var Usuario = res.find((usuario:any) => usuario.Nombre === this.Loginformu.value.Usuario);
      if(typeof Usuario === "object"){ 
        if(Usuario.Clave === this.Loginformu.value.Clave){
          localStorage.setItem("nombre", Usuario.Nombre);
          this.router.navigateByUrl("/pokeapi");
        }else{
          alert("El Usuario o CLave son incorrectas");
        }
      }else{
        alert("El Usuario o CLave son incorrectas");
      }
    });
  }
}
