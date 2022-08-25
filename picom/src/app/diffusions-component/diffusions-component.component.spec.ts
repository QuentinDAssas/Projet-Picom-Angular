import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffusionsComponentComponent } from './diffusions-component.component';

describe('DiffusionsComponentComponent', () => {
  let component: DiffusionsComponentComponent;
  let fixture: ComponentFixture<DiffusionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffusionsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffusionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
