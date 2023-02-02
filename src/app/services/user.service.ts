import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient,private router : Router) { }

  private header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${(localStorage.getItem('token'))}`
  })

  login(f:NgForm){
    return this.http.post('http://localhost:3000/user/login',f.value);
  }

  register(f:NgForm){
    return this.http.post('http://localhost:3000/user/create',f.value);
  }

  tokenValidete(){
    return this.http.post('http://localhost:3000/user/verif-token',{ headers : this.header });
  }

  getUser(){
    return this.http.get('http://localhost:3000/user/user-details',{ headers : this.header });
  }

  loggout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
