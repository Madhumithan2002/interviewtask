import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksummunatiComponent } from './tasksummunati.component';

describe('TasksummunatiComponent', () => {
  let component: TasksummunatiComponent;
  let fixture: ComponentFixture<TasksummunatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksummunatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksummunatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
