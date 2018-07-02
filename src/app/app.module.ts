import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppsDataComponent } from './components/apps-data/apps-data.component';
import { HomeComponent } from './components/home/home.component'




@NgModule({
  declarations: [
    AppComponent, HeaderComponent, DashboardComponent, AppsDataComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
