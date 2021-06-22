import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginStorePage } from './login-store.page';

const routes: Routes = [
  {
    path: '',
    component: LoginStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginStorePageRoutingModule {}
