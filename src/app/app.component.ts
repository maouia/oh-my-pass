import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PasswordService} from "./services/password.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'oh-my-pass';
  constructor(private router:Router , private passwordService : PasswordService) {
  }


  public islogin(){
    return this.router.url === '/login' || this.router.url === '/sign-in' ;
  }

  onsubmit(add: NgForm) {
    this.passwordService.create(add).subscribe();
    this.passwordService.refreched$.next(true)
  }

  ngOnInit() {
  }
}
