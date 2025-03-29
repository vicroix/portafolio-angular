import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatonComponent } from './raton.component';

describe('RatonComponent', () => {
  let component: RatonComponent;
  let fixture: ComponentFixture<RatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
