import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http : HttpClient) { }

  public refreched$ = new BehaviorSubject<boolean>(true);


  getAll():Observable<any>{
    return this.http.get("http://localhost:3000/password/get-all");
  }

  decode(f:NgForm){
    return this.http.post(`http://localhost:3000/password/get-pass`, f.value  );
  }

  delete(deletepass:any){
    return this.http.delete(`http://localhost:3000/password/delete/${deletepass}`);
  }


  create(f:NgForm){
    return this.http.post(`http://localhost:3000/password/create`, f.value  );
  }



}
