import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCategoryPage } from './manage-category.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCategoryPageRoutingModule {}
