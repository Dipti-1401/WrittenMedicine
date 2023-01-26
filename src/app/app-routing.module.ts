import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { NormalUserDashboardComponent } from './smart-components/components/normal-user-dashboard/normal-user-dashboard.component';
import { SuperAdminDashboardComponent } from './smart-components/components/super-admin-dashboard/super-admin-dashboard.component';
import { TechAdminDashboardComponent } from './smart-components/components/tech-admin-dashboard/tech-admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path:'superAdmin',
    component:SuperAdminDashboardComponent
  },
  {
    path: 'techAdmin',
    component :TechAdminDashboardComponent
  },
  {
    path:'normalUser',
    component: NormalUserDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
