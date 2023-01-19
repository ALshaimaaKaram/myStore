import { Component, EventEmitter, Output } from '@angular/core';
import { IProductItem } from 'src/app/models/IProductItem';
import { ProductItemService } from 'src/app/services/ProductItem.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productsList: any;
  product: IProductItem[] = [];
  @Output() products: EventEmitter<IProductItem[]> | undefined;

  constructor(private productItemService: ProductItemService) {
    this.products = new EventEmitter<IProductItem[]>
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
