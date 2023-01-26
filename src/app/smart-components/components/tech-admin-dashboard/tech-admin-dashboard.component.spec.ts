import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAdminDashboardComponent } from './tech-admin-dashboard.component';

describe('TechAdminDashboardComponent', () => {
  let component: TechAdminDashboardComponent;
  let fixture: ComponentFixture<TechAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechAdminDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
