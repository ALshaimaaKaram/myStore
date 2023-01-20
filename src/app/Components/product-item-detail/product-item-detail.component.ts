import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/Cart.service';
import { ProductItemService } from 'src/app/services/ProductItem.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  productSentedId: any;
  product: any;

  constructor(private activeRoute: ActivatedRoute,
              private productItemService: ProductItemService,
              private cartService:CartService) {

    this.activeRoute.paramMap.subscribe(
      (params) => {
        this.productSentedId = params.get("PID");
        this.productItemService.getProductByID(+this.productSentedId).subscribe({
          next: (product) => {
            this.product = product;
            console.log(product)
          }
        })
      }
    )
  }

  addToCart(){
    if(this.cartService.addToshppingCart(this.product))
    {
      window.alert('Your product already in the cart!');
    }
    else
    {
      window.alert('Your product has been added to the cart!');
    }
  }
}
