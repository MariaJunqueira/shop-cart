import { Component, OnInit } from '@angular/core';

import { Product } from '../../../../core/models/product';
import { ProductService } from '../../../../core/services/product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[];

  ngOnInit() {
    console.log(this.productService.getAllProducts());
  }
}
