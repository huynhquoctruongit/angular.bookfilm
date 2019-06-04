import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDangchieuComponent } from './film-dangchieu.component';

describe('FilmDangchieuComponent', () => {
  let component: FilmDangchieuComponent;
  let fixture: ComponentFixture<FilmDangchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDangchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDangchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
