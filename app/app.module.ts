import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { OrganizationService } from './services/organization.service';
import { routing } from './app.routing';

import { AppComponent }  from './components/app.component';
import { OrganizationFormComponent } from './components/organization-form.component';
import { OrganizationsListComponent } from './components/organizations-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
  declarations: [ AppComponent, OrganizationFormComponent, OrganizationsListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ OrganizationService ]
})
export class AppModule { }
