import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'register-store',
    loadChildren: () => import('./register-store/register-store.module').then( m => m.RegisterStorePageModule)
  },
  {
    path: 'login-store',
    loadChildren: () => import('./login-store/login-store.module').then( m => m.LoginStorePageModule)
  },
  {
    path: 'dashboard-store',
    loadChildren: () => import('./dashboard-store/dashboard-store.module').then( m => m.DashboardStorePageModule)
  },
  {
    path: 'manage-store',
    loadChildren: () => import('./manage-store/manage-store.module').then( m => m.ManageStorePageModule)
  },
  {
    path: 'track-order',
    loadChildren: () => import('./track-order/track-order.module').then( m => m.TrackOrderPageModule)
  },
  {
    path: 'member-profile',
    loadChildren: () => import('./member-profile/member-profile.module').then( m => m.MemberProfilePageModule)
  },
  {
    path: 'member-payment',
    loadChildren: () => import('./member-payment/member-payment.module').then( m => m.MemberPaymentPageModule)
  },
  {
    path: 'dashboard-admin',
    loadChildren: () => import('./dashboard-admin/dashboard-admin.module').then( m => m.DashboardAdminPageModule)
  },
  {
    path: 'manage-product',
    loadChildren: () => import('./manage-product/manage-product.module').then( m => m.ManageProductPageModule)
  },
  {
    path: 'manage-seller',
    loadChildren: () => import('./manage-seller/manage-seller.module').then( m => m.ManageSellerPageModule)
  },
  {
    path: 'manage-category',
    loadChildren: () => import('./manage-category/manage-category.module').then( m => m.ManageCategoryPageModule)
  },
  {
    path: 'manage-member',
    loadChildren: () => import('./manage-member/manage-member.module').then( m => m.ManageMemberPageModule)
  },
  {
    path: 'dashboard-member',
    loadChildren: () => import('./dashboard-member/dashboard-member.module').then( m => m.DashboardMemberPageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
