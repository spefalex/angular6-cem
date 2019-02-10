import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LireproduitComponent } from './lireproduit.component';

describe('LireproduitComponent', () => {
  let component: LireproduitComponent;
  let fixture: ComponentFixture<LireproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LireproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LireproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
