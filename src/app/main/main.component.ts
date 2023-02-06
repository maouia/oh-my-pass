import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PasswordService} from "../services/password.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private passwordService : PasswordService) {
  }


}
