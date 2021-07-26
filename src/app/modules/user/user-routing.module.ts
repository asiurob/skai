import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
    {
      path: 'login',
      loadChildren: () => import('@modules/user/component/login/login.module')
        .then(m => m.LoginModule)
    },
    {
      path: 'my-account',
      loadChildren: () => import('@modules/user/component/my-account/my-account.module')
        .then(m => m.MyAccountModule)
    },
    {
      path: 'check-in',
      loadChildren: () => import('@modules/user/component/register/register.module')
        .then(m => m.RegisterModule)
    },
    {
      path: 'recover-password',
      loadChildren: () => import('@modules/user/component/forgot-password/forgot-password.module')
        .then(m => m.ForgotPasswordModule)
    },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
