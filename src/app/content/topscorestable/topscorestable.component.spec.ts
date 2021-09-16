import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopscorestableComponent } from './topscorestable.component';

describe('TopscorestableComponent', () => {
  let component: TopscorestableComponent;
  let fixture: ComponentFixture<TopscorestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopscorestableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopscorestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
