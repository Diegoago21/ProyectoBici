import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  redirectTo:'/home',
  pathMatch:'full',
  
},
  { path: 'home',
   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
   },
    { path: 'login', loadChildren: () => import('./aut/login/login.module').then(m => m.LoginModule) 
  }, 
  { path: 'register', loadChildren: () => import('./aut/register/register.module').then(m => m.RegisterModule) },
{ path: 'about', loadChildren: () => import('./aut/about/about.module').then(m => m.AboutModule) },
{ path: 'menu', loadChildren: () => import('./aut/menu/menu.module').then(m => m.MenuModule) },
{ path: 'regisproducto', loadChildren: () => import('./aut/regisproducto/regisproducto.module').then(m => m.RegisproductoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
