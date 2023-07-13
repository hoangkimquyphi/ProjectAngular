import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'staff', component: StaffComponent },
];

@NgModule(
  {

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class UsersRoutingModule {}
