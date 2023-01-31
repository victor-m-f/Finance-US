import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPreferencesComponent } from './preferences/user-preferences.component';

const routes: Routes = [
  { path: 'preferences', component: UserPreferencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
