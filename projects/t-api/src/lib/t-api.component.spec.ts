import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TApiComponent } from './t-api.component';

describe('TApiComponent', () => {
  let component: TApiComponent;
  let fixture: ComponentFixture<TApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
