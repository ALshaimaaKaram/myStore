import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProductItem } from '../models/IProductItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { find, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {

  productsList: any;
  product: any;
//constructor() {
constructor(private httpService: HttpClient, private router:Router) {

}

getAllProductItems(): Observable<IProductItem[]> {
  const httpOption = {
    headers: new HttpHeaders({
      'content-type': 'Application/JSON'
    })
  }
  console.log("hello");
  //this.productsList = [];
  //return this.productsList;
  return this.httpService.get<IProductItem[]>("../../assets/MOCK_DATA.json", httpOption);
  //return this.httpService.get<IProductItem>(`${environment.APIURL}/Product`, httpOption);
}

getProductByID(pID: number): Observable<IProductItem | undefined> {
  this.product = this.httpService.get<IProductItem[]>("../../assets/MOCK_DATA.json").pipe(
    map((products) => products.find(product => product.id === pID)));
    return this.product;
};

}
