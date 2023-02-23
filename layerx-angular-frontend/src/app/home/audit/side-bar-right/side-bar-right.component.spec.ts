import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarRightComponent } from './side-bar-right.component';

describe('SideBarComponent', () => {
  let component: SideBarRightComponent;
  let fixture: ComponentFixture<SideBarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
