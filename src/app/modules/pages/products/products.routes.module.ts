import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

import { ListComponent } from './list/list.component';
import { ListResolver } from './list/services/list.resolver';
import { ProductsComponent } from './products.component';

export const productsRoutesModule: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        resolve: { products: ListResolver },
      },
      { path: 'detail/:id', component: DetailComponent },
    ],
  },
];
