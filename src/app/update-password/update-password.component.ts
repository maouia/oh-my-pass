import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PasswordService} from "../services/password.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit{

  curent_data:any;
  private id = this.route.snapshot.paramMap.get("id")
  constructor(private passwordService:PasswordService,private route:ActivatedRoute) {
  }
  onsubmit(update: NgForm) {
    this.passwordService.update(update,this.id).subscribe();
    this.passwordService.refreched$.next(true);
  }

  ngOnInit() {

    this.passwordService.getById(this.id).subscribe(data=>{
      this.curent_data=data;
      console.log(data)
    })

  }

}
