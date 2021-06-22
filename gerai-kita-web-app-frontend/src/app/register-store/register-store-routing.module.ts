import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterStorePage } from './register-store.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterStorePageRoutingModule {}
