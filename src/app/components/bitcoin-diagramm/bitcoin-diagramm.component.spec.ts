import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinDiagrammComponent } from './bitcoin-diagramm.component';

describe('BitcoinDiagrammComponent', () => {
  let component: BitcoinDiagrammComponent;
  let fixture: ComponentFixture<BitcoinDiagrammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinDiagrammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinDiagrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
