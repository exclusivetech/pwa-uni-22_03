import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAuthComponent } from './t-auth.component';

describe('TAuthComponent', () => {
  let component: TAuthComponent;
  let fixture: ComponentFixture<TAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
