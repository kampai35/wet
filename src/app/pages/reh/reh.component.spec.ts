import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehComponent } from './reh.component';

describe('RehComponent', () => {
  let component: RehComponent;
  let fixture: ComponentFixture<RehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
