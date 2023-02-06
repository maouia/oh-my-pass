import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private userService : UserService,private router : Router) {
  }
  onsubmit(signin: NgForm) {
    this.userService.register(signin).subscribe(data=>{
      localStorage.setItem('token', data.toString());
      this.router.navigate(["/password"])
    });
  }
}
