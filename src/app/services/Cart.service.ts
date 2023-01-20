import { Injectable } from '@angular/core';
import { IProductItem } from '../models/IProductItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProductItem[] = []
constructor() { }

isFound:boolean = false;
addToshppingCart(product:IProductItem){
  // for (let index = 0; index < this.items.length; index++) {
  //   if(this.items[index]==product)
  //       {
  //         //this.isFound = true;
  //         return true;
  //       }
  // }
  // this.items.push(product);
  // return false;

  if(this.items.some(item => item.id === product.id))
    return true;
  else
  {
    this.items.push(product);
    return false;
  }
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
