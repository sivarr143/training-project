import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbowlerstableComponent } from './topbowlerstable.component';

describe('TopbowlerstableComponent', () => {
  let component: TopbowlerstableComponent;
  let fixture: ComponentFixture<TopbowlerstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbowlerstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbowlerstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
