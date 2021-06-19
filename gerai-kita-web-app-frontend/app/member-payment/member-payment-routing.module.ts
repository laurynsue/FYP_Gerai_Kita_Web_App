import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberPaymentPage } from './member-payment.page';

const routes: Routes = [
  {
    path: '',
    component: MemberPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberPaymentPageRoutingModule {}
