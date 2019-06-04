import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfilmNewComponent } from './listfilm-new.component';

describe('ListfilmNewComponent', () => {
  let component: ListfilmNewComponent;
  let fixture: ComponentFixture<ListfilmNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfilmNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfilmNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
