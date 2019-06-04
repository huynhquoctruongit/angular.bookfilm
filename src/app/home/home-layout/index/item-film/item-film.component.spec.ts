import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilmComponent } from './item-film.component';

describe('ItemFilmComponent', () => {
  let component: ItemFilmComponent;
  let fixture: ComponentFixture<ItemFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
