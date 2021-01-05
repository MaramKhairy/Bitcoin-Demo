import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitcoinDetailsComponent } from './components/bitcoin-details/bitcoin-details.component';
import { BitcoinDiagrammComponent } from './components/bitcoin-diagramm/bitcoin-diagramm.component';
import { BitcoinUmrechnerComponent } from './components/bitcoin-umrechner/bitcoin-umrechner.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MeineBitcoinComponent } from './components/meine-bitcoin/meine-bitcoin.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'bitcoin-details', component: BitcoinDetailsComponent },
  { path: 'umrechner', component: BitcoinUmrechnerComponent },
  { path: 'charts', component: BitcoinDiagrammComponent },
  { path: 'meine-bitcoin', component: MeineBitcoinComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[DashboardComponent, 
  BitcoinDetailsComponent, 
  BitcoinUmrechnerComponent,
  BitcoinDiagrammComponent,
  MeineBitcoinComponent,
  NavbarComponent];