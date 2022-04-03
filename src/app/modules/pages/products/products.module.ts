import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ProductsComponent } from './products.component';

import { productsRoutesModule } from './products.routes.module';
import { SearchModule } from '../../components/search/search.module';
import { SortModule } from '../../components/sort/sort.module';
import { ProductModule } from '../../components/product/product.module';
import { ListItemComponent } from './list/item/item.component';
import { DetailModule } from './detail/detail.module';
import { ProductService } from '../../../core/services/product/product.service';
import { ListResolver } from './list/services/list.resolver';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    RouterModule.forChild(productsRoutesModule),
    SearchModule,
    SortModule,
    DetailModule,
  ],
  declarations: [ProductsComponent, ListItemComponent, ListComponent],
  providers: [ProductService, ListResolver],
})
export class ProductsModule {}
