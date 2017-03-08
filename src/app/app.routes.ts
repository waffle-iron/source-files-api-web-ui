import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AppComponent } from './app.component';


export const ROUTES: Routes = [
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'home', component: AppComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
