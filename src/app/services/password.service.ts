import { Injectable } from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http : HttpClient) { }

  private header = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  getAll():Observable<object>{
    return this.http.get("http://localhost:3000/password/get-all", );
  }

  decode(f:any){
    return this.http.post(`http://localhost:3000/password/get-pass`, f.value  );
  }

  delete(deletepass:any){
    return this.http.delete(`http://localhost:3000/password/delete/${deletepass}`,).pipe(
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
