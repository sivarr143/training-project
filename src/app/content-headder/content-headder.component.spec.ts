import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeadderComponent } from './content-headder.component';

describe('ContentHeadderComponent', () => {
  let component: ContentHeadderComponent;
  let fixture: ComponentFixture<ContentHeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentHeadderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
