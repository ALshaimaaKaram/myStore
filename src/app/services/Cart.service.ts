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

total: number = 0;
getTotalCost(){
  this.total = 0;
  this.items.forEach(p => { this.total+= +p.price });
  return this.total;
}
itemRemove:any
removeItem(product:IProductItem)
{
//   this.items.forEach((item,index)=>{
//     if(item===product) delete this.items[index];
//  });
this.items = this.items.filter(item => item !== product)

console.log(this.items)
}

clearCart() {
  this.items = [];
  return this.items;
}
}
