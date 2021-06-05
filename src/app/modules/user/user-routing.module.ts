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
      path: 'mi-cuenta',
      loadChildren: () => import('@modules/user/component/my-account/my-account.module')
        .then(m => m.MyAccountModule)
    },
    {
      path: 'registrarse',
      loadChildren: () => import('@modules/user/component/register/register.module')
        .then(m => m.RegisterModule)
    },
    {
      path: 'recuperar-contrasena',
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
