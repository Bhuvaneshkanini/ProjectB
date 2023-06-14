import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorouselcomponentComponent } from './corouselcomponent.component';

describe('CorouselcomponentComponent', () => {
  let component: CorouselcomponentComponent;
  let fixture: ComponentFixture<CorouselcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorouselcomponentComponent]
    });
    fixture = TestBed.createComponent(CorouselcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
