/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductItemService } from './ProductItem.service';

describe('Service: ProductItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductItemService]
    });
  });

  it('should ...', inject([ProductItemService], (service: ProductItemService) => {
    expect(service).toBeTruthy();
  }));
});
