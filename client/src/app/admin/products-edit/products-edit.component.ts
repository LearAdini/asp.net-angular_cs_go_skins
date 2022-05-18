import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  product!: Product;
  @ViewChild('editForm') editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }

  constructor(  private productService: ProductService,private route: ActivatedRoute, private router:Router, private toastr: ToastrService) {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productService.getProduct(productIdFromRoute).subscribe(x=>{
      this.product = x;
    });
   }

  ngOnInit() {
  }

  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(()=>{
      this.toastr.success('Product updated successfully');
      this.editForm.reset(this.product);
    });
  }

  deleteProduct(){
    if(confirm("Are you sure to delete product number: "+ this.product.productId + " ?")) {
      this.productService.deleteProduct(this.product.productId).subscribe(()=>{
        this.toastr.info('Product deleted successfully');
        this.editForm.reset(this.product);
        this.router.navigateByUrl('/products');
      }
      );
    }
  }
}
