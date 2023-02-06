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

  constructor(private passwordService : PasswordService,private router:Router) {
    this.getAll();
  }

  passords$ : any;
  id:any
  result :any = {};

  getAll(){
    this.passwordService.getAll().subscribe(data=>{
      this.passords$=data;
    })
  }

  ngOnInit(): void {
    this.passwordService.Refrech.subscribe(res=>{
      this.getAll();
    });
  }

    setid(idform:any){
        this.id=idform;
    }

   onsubmit(form: NgForm) {
    this.passwordService.decode(form).subscribe((data)=>{
     this.result= data;
    })

  }

  rest() {
    this.result = {};
  }

  delete(pass: any) {
    console.log(typeof (pass))
    this.passwordService.delete(pass).subscribe();
  }
}
