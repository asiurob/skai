import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
    {
      path: '',
      loadChildren: () => import('@modules/landing-page/landing-page.module')
        .then(m => m.LandingPageModule)
    },
    {
      path: 'comprar',
      loadChildren: () => import('@modules/buy/buy.module')
        .then(m => m.BuyModule)
    },
    {
      path: 'detail',
      loadChildren: () => import('@modules/detail/detail.module')
        .then(m => m.DetailModule)
    },
    {
      path: 'user',
      loadChildren: () => import('@modules/user/user.module')
        .then(m => m.UserModule)
    },
]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
