import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenCfComponent } from './between-cf.component';

describe('BetweenCfComponent', () => {
  let component: BetweenCfComponent;
  let fixture: ComponentFixture<BetweenCfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetweenCfComponent]
    });
    fixture = TestBed.createComponent(BetweenCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
