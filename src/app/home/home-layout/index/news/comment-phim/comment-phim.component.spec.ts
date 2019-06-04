import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPhimComponent } from './comment-phim.component';

describe('CommentPhimComponent', () => {
  let component: CommentPhimComponent;
  let fixture: ComponentFixture<CommentPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
