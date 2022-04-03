import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../../../../core/models/product';
import { ProductService } from '../../../../../core/services/product/product.service';

@Injectable()
export class ListResolver {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    return this.productService.getAllProducts();
  }
}
