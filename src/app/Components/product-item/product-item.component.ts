import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  src:string = "";
  name:string = "";
  price:number = 0;

  @Input() product:any;
  //constructor(private cartService:CartService) {
  }

  // addToCart(){
  //   this.cartService.addToshppingCart(this.product)
  // }

