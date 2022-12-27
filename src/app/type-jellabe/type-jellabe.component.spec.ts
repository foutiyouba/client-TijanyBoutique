import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeJellabeComponent } from './type-jellabe.component';

describe('TypeJellabeComponent', () => {
  let component: TypeJellabeComponent;
  let fixture: ComponentFixture<TypeJellabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeJellabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeJellabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
