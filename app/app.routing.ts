import { Routes, RouterModule } from '@angular/router';

import { OrganizationFormComponent }      from './components/organization-form.component';
import { OrganizationsListComponent }      from './components/organizations-list.component';

const appRoutes: Routes = [
{
    path: '',
    redirectTo: '/organization-register',
    pathMatch: 'full'
  },

  {
    path: 'organization-register',
    component: OrganizationFormComponent
  },
  
  {
    path: 'organizations-list',
    component: OrganizationsListComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);