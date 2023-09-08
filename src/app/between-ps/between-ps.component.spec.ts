import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenPsComponent } from './between-ps.component';

describe('BetweenPsComponent', () => {
  let component: BetweenPsComponent;
  let fixture: ComponentFixture<BetweenPsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetweenPsComponent]
    });
    fixture = TestBed.createComponent(BetweenPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
