import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostsComponent } from './show-posts.component';

describe('ShowPostsComponent', () => {
  let component: ShowPostsComponent;
  let fixture: ComponentFixture<ShowPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
