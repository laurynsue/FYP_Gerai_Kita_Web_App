import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSellerPage } from './manage-seller.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSellerPageRoutingModule {}
