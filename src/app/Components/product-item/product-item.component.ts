import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product:any;
  constructor(private cartService:CartService) {
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
