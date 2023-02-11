import {Component, OnInit} from '@angular/core';
import {PasswordService} from "../services/password.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { switchMap} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {ToastmessagesService} from "../services/toastmessages.service";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(private passwordService : PasswordService,private router:Router, private toastMessage : ToastmessagesService) {
  }

  passords : any;
  id:any
  result :any = {};



  ngOnInit() {
    this.passords= this.passwordService.refreched$.pipe(switchMap(_=>this.passwordService.getAll()))
  }

    setid(idform:any){
        this.id=idform;
    }

   onsubmit(form: NgForm) {
    this.passwordService.decode(form).subscribe((data)=>{
     this.result= data;
     console.log(data)
    })
  }

  rest() {
    this.result = {};
  }

   async delete(pass: string) {
      this.passwordService.delete(pass).subscribe();
      await this.passwordService.refreched$.next(true)
     this.toastMessage.showDelete("The Password has been deleted");
  }
}
