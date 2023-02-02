import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class VeriftokenService implements CanActivate{

  constructor(private userService : UserService,private router :Router) { }

  canActivate(){

    this.userService.tokenValidete().subscribe(data=>{
      if(data==false){
        localStorage.removeItem('token');
        this.router.navigate(["/login"])
      }
    })
    return true
  }
}
