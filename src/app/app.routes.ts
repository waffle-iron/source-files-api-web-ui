import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const ROUTES: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'terms', component: TermsAndConditionsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
