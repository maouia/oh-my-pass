import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http : HttpClient) { }
  private  api = "http://localhost:3000/password/";


  public refreched$ = new BehaviorSubject<boolean>(true);


  getAll():Observable<any>{
    return this.http.get(this.api+"get-all");
  }

  decode(f:NgForm){
    return this.http.post(this.api+`get-pass`, f.value  );
  }

  delete(deletepass:any){
    return this.http.delete(this.api+`delete/${deletepass}`);
  }


  create(f:NgForm){
    return this.http.post(this.api+`create`, f.value  );
  }

  update(f:NgForm,id:any){
    return this.http.put(this.api+`update/${id}`, f.value  );
  }

  getById(id : any){
    return this.http.get(this.api+`get-byid/${id}`);
  }

}
