import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceComponentComponent } from './annonce-component.component';

describe('AnnonceComponentComponent', () => {
  let component: AnnonceComponentComponent;
  let fixture: ComponentFixture<AnnonceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
