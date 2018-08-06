import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcontentComponent } from './showcontent.component';

describe('ShowcontentComponent', () => {
  let component: ShowcontentComponent;
  let fixture: ComponentFixture<ShowcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
