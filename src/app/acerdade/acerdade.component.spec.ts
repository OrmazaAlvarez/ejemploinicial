import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerdadeComponent } from './acerdade.component';

describe('AcerdadeComponent', () => {
  let component: AcerdadeComponent;
  let fixture: ComponentFixture<AcerdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcerdadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcerdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
