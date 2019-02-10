import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LirecommandeComponent } from './lirecommande.component';

describe('LirecommandeComponent', () => {
  let component: LirecommandeComponent;
  let fixture: ComponentFixture<LirecommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LirecommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LirecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
