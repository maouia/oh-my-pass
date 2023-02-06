import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http : HttpClient) { }


  getAll():Observable<object>{
    return this.http.get("http://localhost:3000/password/get-all");
  }

  decode(f:NgForm){
    return this.http.post(`http://localhost:3000/password/get-pass`, f.value  ).pipe();
  }

  delete(deletepass:any){
    return this.http.delete(`http://localhost:3000/password/delete/${deletepass}`).pipe(
      tap(()=>{
        this.Refrech.next();
      })
    )
  }


  create(f:NgForm){
    return this.http.post(`http://localhost:3000/password/create`, f.value  ).pipe(
      tap(()=>{
        this.Refrech.next();
      })
    )
  }


  private _refrech = new Subject<void>();
  get Refrech(){
    return this._refrech;
  }
}
