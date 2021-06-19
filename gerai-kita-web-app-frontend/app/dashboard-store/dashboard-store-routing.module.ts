import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardStorePage } from './dashboard-store.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardStorePageRoutingModule {}
