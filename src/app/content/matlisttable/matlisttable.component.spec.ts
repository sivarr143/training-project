import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatlisttableComponent } from './matlisttable.component';

describe('MatlisttableComponent', () => {
  let component: MatlisttableComponent;
  let fixture: ComponentFixture<MatlisttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatlisttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatlisttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
