import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QRCodeModule } from "angularx-qrcode";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPaymentCardModule } from "ngx-payment-card";
import { NgxSpinnerModule } from "ngx-spinner";
import { TabsModule } from "ngx-tabset";
import { ToastrModule } from "ngx-toastr";
import { PipesModule } from "./pipe.module";


@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    QRCodeModule,
    NgxPaymentCardModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    ReactiveFormsModule,
    NgxPaginationModule,
    PipesModule
  ],
  declarations: [],

  exports: [
    BsDatepickerModule,
    TabsModule,
    FormsModule,
    QRCodeModule,
    NgxPaymentCardModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    ToastrModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    PipesModule
  ]
})

export class SharedModule { }
