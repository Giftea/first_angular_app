import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngBootStrapComponent } from './ang-boot-strap.component';

describe('AngBootStrapComponent', () => {
  let component: AngBootStrapComponent;
  let fixture: ComponentFixture<AngBootStrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngBootStrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngBootStrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
