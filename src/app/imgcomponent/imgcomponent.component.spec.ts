import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcomponentComponent } from './imgcomponent.component';

describe('ImgcomponentComponent', () => {
  let component: ImgcomponentComponent;
  let fixture: ComponentFixture<ImgcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
