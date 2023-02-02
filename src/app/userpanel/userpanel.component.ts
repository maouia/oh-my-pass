import { Component } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent {

   user : any;

  constructor(private userService : UserService) {
    userService.getUser().subscribe(data=>{
      this.user=data;
    })
  }

  loggout(){
    this.userService.loggout();
  }



}
