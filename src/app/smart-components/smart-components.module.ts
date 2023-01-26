import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartComponentsRoutingModule } from './smart-components-routing.module';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { TechAdminDashboardComponent } from './tech-admin-dashboard/tech-admin-dashboard.component';
import { NormalUserDashboardComponent } from './normal-user-dashboard/normal-user-dashboard.component';


@NgModule({
  declarations: [
    SuperAdminDashboardComponent,
    TechAdminDashboardComponent,
    NormalUserDashboardComponent
  ],
  imports: [
    CommonModule,
    SmartComponentsRoutingModule
  ]
})
export class SmartComponentsModule { }
