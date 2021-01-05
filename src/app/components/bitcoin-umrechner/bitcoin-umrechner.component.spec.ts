import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinUmrechnerComponent } from './bitcoin-umrechner.component';

describe('BitcoinUmrechnerComponent', () => {
  let component: BitcoinUmrechnerComponent;
  let fixture: ComponentFixture<BitcoinUmrechnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinUmrechnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinUmrechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
