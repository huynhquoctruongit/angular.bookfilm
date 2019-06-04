import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListnewComponent } from './item-listnew.component';

describe('ItemListnewComponent', () => {
  let component: ItemListnewComponent;
  let fixture: ComponentFixture<ItemListnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
