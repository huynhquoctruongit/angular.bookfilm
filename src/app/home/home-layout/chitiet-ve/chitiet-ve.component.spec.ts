import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietVeComponent } from './chitiet-ve.component';

describe('ChitietVeComponent', () => {
  let component: ChitietVeComponent;
  let fixture: ComponentFixture<ChitietVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
