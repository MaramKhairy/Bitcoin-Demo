import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineBitcoinComponent } from './meine-bitcoin.component';

describe('MeineBitcoinComponent', () => {
  let component: MeineBitcoinComponent;
  let fixture: ComponentFixture<MeineBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeineBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeineBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
