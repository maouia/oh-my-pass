import { Injectable } from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http : HttpClient) { }

  private header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${(localStorage.getItem('token'))}`
  })

  getAll():Observable<object>{
    return this.http.get("http://localhost:3000/password/get-all", { headers : this.header });
  }

  decode(f:any){
    return this.http.post(`http://localhost:3000/password/get-pass`, f.value  );
  }

  private _refrech = new Subject<void>();
  get Refrech(){
    return this._refrech;
  }
}
