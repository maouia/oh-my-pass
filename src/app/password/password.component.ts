import {Component, OnInit} from '@angular/core';
import {PasswordService} from "../services/password.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {


  passords$ : any;
  id:any
  result :any = {};
  constructor(private passwordService : PasswordService,private router:Router) {
  }

  getAll(){
    this.passwordService.getAll().subscribe(data=>{
      this.passords$=data;
    })
  }

setid(idform:any){
    this.id=idform;
}

  ngOnInit(): void {
    this.getAll();
    this.passwordService.Refrech.subscribe(responce=>{
      this.getAll();
    })
  }


   onsubmit(form: NgForm) {
    this.passwordService.decode(form).subscribe(data=>{
     this.result= data;
    })

  }

  rest() {
    this.result = {};
  }
}
