import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class WithnouserService implements CanActivate{

  constructor(private router : Router) { }

  canActivate(){
    if(!localStorage.getItem('token')){
      this.router.navigate(["/login"])
    }
    return true;
  }
}
