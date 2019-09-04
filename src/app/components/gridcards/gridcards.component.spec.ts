import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcardsComponent } from './gridcards.component';

describe('GridcardsComponent', () => {
  let component: GridcardsComponent;
  let fixture: ComponentFixture<GridcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
