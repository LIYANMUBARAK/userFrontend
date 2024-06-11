import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/user/components/home/home.component';
import { LoginComponent } from './modules/user/components/login/login.component';
import { UserLoginAuthGuard } from './modules/user/guards/userLoginAuth.guard';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'login',canActivate:[UserLoginAuthGuard],component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
