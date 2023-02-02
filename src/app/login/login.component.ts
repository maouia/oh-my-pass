import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService : UserService,private router : Router) {
  }


  onsubmit(login: NgForm) {

  this.userService.login(login).subscribe(data=>{
    if(data) {
      localStorage.setItem('token', data.toString());
      this.router.navigate(["/password"])
    }

    });
  }


}
