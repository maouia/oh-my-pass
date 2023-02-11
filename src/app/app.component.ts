import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PasswordService} from "./services/password.service";
import {ToastmessagesService} from "./services/toastmessages.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'oh-my-pass';
  constructor(private router:Router , private passwordService : PasswordService, private toastMessage : ToastmessagesService) {
  }


  public islogin(){
    if (localStorage.getItem('token')) {
      return false;
    } else {
      return true;
    }
  }

  async onsubmit(add: NgForm) {
    this.passwordService.create(add).subscribe();
    await this.passwordService.refreched$.next(true)
    this.toastMessage.showAdd("New Password Created");
  }

  ngOnInit() {
  }
}
