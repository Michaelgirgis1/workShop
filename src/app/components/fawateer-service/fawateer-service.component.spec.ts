import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawateerServiceComponent } from './fawateer-service.component';

describe('FawateerServiceComponent', () => {
  let component: FawateerServiceComponent;
  let fixture: ComponentFixture<FawateerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FawateerServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FawateerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
