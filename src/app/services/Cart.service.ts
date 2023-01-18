import { Injectable } from '@angular/core';
import { IProductItem } from '../models/IProductItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProductItem[] = []
constructor() { }

addToshppingCart(product:IProductItem){
  this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}
}
