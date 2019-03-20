import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferrideComponent } from './offerride.component';

describe('OfferrideComponent', () => {
  let component: OfferrideComponent;
  let fixture: ComponentFixture<OfferrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
