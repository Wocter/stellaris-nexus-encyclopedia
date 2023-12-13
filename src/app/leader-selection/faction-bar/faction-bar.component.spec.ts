import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionBarComponent } from './faction-bar.component';

describe('FactionBarComponent', () => {
  let component: FactionBarComponent;
  let fixture: ComponentFixture<FactionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactionBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
