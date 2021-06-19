import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageProductPage } from './manage-product.page';

const routes: Routes = [
  {
    path: '',
    component: ManageProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageProductPageRoutingModule {}
