import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './view/login/login.module#LoginModule'},
  { path: 'home', loadChildren: './view/home/home.module#HomeModule' },
  { path: '', loadChildren: './view/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
