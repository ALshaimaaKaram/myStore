import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private productItemService: ProductItemService) {

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
}
