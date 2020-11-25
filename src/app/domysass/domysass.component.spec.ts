import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomysassComponent } from './domysass.component';

describe('DomysassComponent', () => {
  let component: DomysassComponent;
  let fixture: ComponentFixture<DomysassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomysassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomysassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
