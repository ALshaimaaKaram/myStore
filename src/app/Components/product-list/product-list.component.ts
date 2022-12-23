import { Component } from '@angular/core';
import { ProductItemService } from 'src/app/services/ProductItem.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productsList: any;

  constructor(private productItemService: ProductItemService) {
  //constructor() {

    console.log("hhh");
    this.getAllProductItems();
}

getAllProductItems()
  {
    this.productItemService.getAllProductItems().subscribe({
      next: (products) => {
        this.productsList = products;
      }
    })
  }
}
