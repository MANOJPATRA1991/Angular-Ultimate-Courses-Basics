import { NgModule } from '@angular/core';
// Needed if we are implementing a browser app
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './database/in-memory-data.service';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  imports: [ 
    // Angular modules
    BrowserModule, 
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    // Custom modules
    PassengerDashboardModule
  ],
  // Components that belong to this module
  // Declarables: components, directives and pipes
  // Declarables must belong to exactly one module
  declarations: [ AppComponent ],
  // Only the root module contains the bootstrap component
  // AppComponent is the root component that Angular creates and inserts into the index.html host web page.
  bootstrap: [ AppComponent ],
  providers: [InMemoryDataService]
})
export class AppModule { }