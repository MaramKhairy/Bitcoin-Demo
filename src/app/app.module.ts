import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { ConversionService } from './services/conversion.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule} from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select'; 
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'; 


const MaterialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  TextFieldModule,
  MatIconModule,
  MatTableModule
];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialModules,
    HttpClientModule
  ],
  providers: [DataService, ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
