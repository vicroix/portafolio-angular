import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidescripcionComponent } from './midescripcion.component';

describe('MidescripcionComponent', () => {
  let component: MidescripcionComponent;
  let fixture: ComponentFixture<MidescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidescripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
