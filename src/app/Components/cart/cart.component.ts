import { Component } from '@angular/core';
import { IProductItem } from 'src/app/models/IProductItem';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) { }
  items = this.cartService.getItems();
  totalcost = this.cartService.getTotalCost();

  removeItem(product:IProductItem){
    this.cartService.removeItem(product);
    this.items = this.cartService.getItems();
    this.totalcost = this.cartService.getTotalCost();
    window.alert('Your product deleted');
  }
}
