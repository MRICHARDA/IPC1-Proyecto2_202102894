import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserService {
  entrar() {
    return this.http.get('http://localhost:3000/todos-usuarios')
  }

  constructor(private http:HttpClient) { }
}
