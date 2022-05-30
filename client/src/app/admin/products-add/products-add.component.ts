import { Component, HostListener, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  addForm: FormGroup;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any){
    if(this.addForm.dirty){
      $event.returnValue = true;
    }
  }
  constructor(private productService: ProductService,private toastr: ToastrService,private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.addForm = this.fb.group({
      productName: new FormControl('',Validators.required),
      productDescription: new FormControl('',Validators.required),
      productPrice: new FormControl('',Validators.required),
      productSale: new FormControl('',Validators.required),
      imageUrl: new FormControl('',Validators.required),
});
  }

  addProduct(){
    this.productService.addProduct(this.addForm.value).subscribe(()=>{
      this.toastr.success('Product added successfully');
      this.addForm.reset();
    });
  }
}
