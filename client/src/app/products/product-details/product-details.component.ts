import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Product } from '../../models/products';
import { User } from '../../models/user';
import { AccountService } from '../../service/account.service';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  addedCart: any;
  products?: Product[];
  user: User;
  admin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user as User;
    });

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productService.getProduct(productIdFromRoute).subscribe(x => {
      this.product = x;

      setTimeout(() => {
        render({
          id: "#myPaypalButtons",
          currency: "USD",
          value: (this.product!.productPrice - (this.product!.productPrice * this.product!.productSale / 100)).toFixed(2).toString(),

          onApprove: (details) => {
            details = this.cartService.getItems();
            alert('Success');
          }
        });
      });
    });
  }

  ngOnInit() {
    if (this.user.username == 'Admin') {
      this.admin = true;
    }
  }

  addToCart(item: Product) {
    this.cartService.addToCart(item);
    this.addedCart = true;
    setTimeout(() => {
      this.addedCart = false;
    }, 3000);
  }

  deleteProduct() {
    if (confirm("Are you sure you want to delete product number: " + this.product.productId + " ?")) {
      this.productService.deleteProduct(this.product.productId).subscribe(() => {
        this.toastr.info('Product deleted successfully');
        this.router.navigateByUrl('/products');
      }
      );
    }
  }
}
