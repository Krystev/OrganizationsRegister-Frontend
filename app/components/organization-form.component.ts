import { Component } from '@angular/core';
import { Organization } from '../model/organization';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';

@Component({
    selector: 'organization-form',
    templateUrl: 'app/components/organization-form.component.html'
})

export class OrganizationFormComponent {
   componentName: 'OrganizationFormComponent'
   
	constructor (private organizationService: OrganizationService){}

   
    model = new Organization(100, 'VSO', '123dad2', '2016-08-11', 'Emo', 'Kokiche 14', '3000', 'Training', 'Training description');

   saveOrganization() {
   this.organizationService.saveOrganization(this.model).subscribe(
   data => {this.model = data;},
   error => alert('Error' + error),
   () => {
   console.log("finished " + this.model.organizationName);
   }
   );
   
   }
    onSubmit() {this.saveOrganization();}
}
bootstrap(OrganizationFormComponent)