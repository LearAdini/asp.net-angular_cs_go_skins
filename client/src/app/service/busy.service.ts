import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequestCount = 0;
  constructor(
    private spinnerService: NgxSpinnerService

  ) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(
      // undefined,
      // {
      //   type: 'square-jelly-box',
      //   // size:"large",
      //    bdColor:'rgb(44,44,44)',
      //    color:'#eea1a1',
      //   fullScreen: true
      // }
    )
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
