import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsDataComponent } from './components/apps-data/apps-data.component';
import { ServiceFileService } from './services/service-file.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AppsDataComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    HttpModule

  ],
  providers: [ServiceFileService],
  bootstrap: [AppComponent]
})

export class AppModule { }
