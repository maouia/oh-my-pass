import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastmessagesService {

  constructor(private toastr: ToastrService) { }

  showAdd(sub:any) {
    this.toastr.success('Added Successfully', `${sub}`);
  }

  showDelete(sub:any){
    this.toastr.error('Deleted Successfully', `${sub}`);
  }

  showUpdate(sub:any){
    this.toastr.info('Updated Successfully', `${sub}`);
  }
}
