import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardAdminPage } from './dashboard-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardAdminPageRoutingModule {}
