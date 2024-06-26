import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicEditComponent } from './topic-edit.component';

describe('TopicEditComponent', () => {
  let component: TopicEditComponent;
  let fixture: ComponentFixture<TopicEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
