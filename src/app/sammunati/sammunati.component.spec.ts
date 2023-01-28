import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SammunatiComponent } from './sammunati.component';

describe('SammunatiComponent', () => {
  let component: SammunatiComponent;
  let fixture: ComponentFixture<SammunatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SammunatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SammunatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
