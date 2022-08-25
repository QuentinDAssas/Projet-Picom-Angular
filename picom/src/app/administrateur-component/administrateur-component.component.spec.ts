import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurComponentComponent } from './administrateur-component.component';

describe('AdministrateurComponentComponent', () => {
  let component: AdministrateurComponentComponent;
  let fixture: ComponentFixture<AdministrateurComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrateurComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrateurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
