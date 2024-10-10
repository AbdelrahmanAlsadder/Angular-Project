import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerRequestCardComponent } from './lower-request-card.component';

describe('LowerRequestCardComponent', () => {
  let component: LowerRequestCardComponent;
  let fixture: ComponentFixture<LowerRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerRequestCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
