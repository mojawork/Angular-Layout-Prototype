import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediascreenComponent } from './mediascreen.component';

describe('MediascreenComponent', () => {
  let component: MediascreenComponent;
  let fixture: ComponentFixture<MediascreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediascreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediascreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
