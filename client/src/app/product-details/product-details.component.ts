import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { render } from 'creditcardpayments/creditCardPayments';
import { Product, products } from '../models/products';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  // @Input() productItem: Product;
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  addedCart : any;

  constructor(
    private route: ActivatedRoute,
     private cartService: CartService,
      private router: Router
      ) {
    setTimeout(() => {

      render({
        id: "#myPaypalButtons",
        currency: "USD",
        value: (this.product!.price - (this.product!.price * this.product!.sale / 100)).toFixed(2).toString(),

        onApprove: (details) => {
          details = this.cartService.getItems()
          alert('Success');
        }
      });
    }, 5);
  }

  ngOnInit() {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);

    this.galleryOptions = [
      {
        width: '500px',
        height: '450px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true,
        previewFullscreen: true,
      }];

    this.galleryImages = this.getImages();
  }

  addToCart(item:Product) {
    this.cartService.addToCart(item);
      this.addedCart = true;
      setTimeout(() => {
        this.addedCart = false;
       },3000);
  }

  getImages(): NgxGalleryImage[] {
    const imgUrls: NgxGalleryImage[] = [];
    for (const photo of this.product!.imageUrl) {
      imgUrls.push({

        small: photo,
        medium: photo,
        big: photo,
        description: this.product!.name
      })
    }
    return imgUrls;
  }
}
