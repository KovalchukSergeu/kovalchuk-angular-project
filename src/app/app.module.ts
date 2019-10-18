import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { JobOpeningsComponent } from './components/job-openings/job-openings.component';
import { JobServicesComponent } from './components/job-services/job-services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'job-openings', component: JobOpeningsComponent},
    {path: 'job-services', component: JobServicesComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: '**', component: HomeComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    JobOpeningsComponent,
    JobServicesComponent,
    ContactsComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
