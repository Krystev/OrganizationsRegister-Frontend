import { Component } from '@angular/core';
import { Organization } from '../model/organization';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';
import { Control, ControlGroup } from '@angular/common';

@Component({
    selector: 'organization-form',
    templateUrl: 'app/components/organization-form.component.html'
})

export class OrganizationFormComponent {

   	componentName: 'OrganizationFormComponent'
   	private form: ControlGroup;
   	active = true;
   	submitted = false;

    constructor(private organizationService: OrganizationService) { }

    model = new Organization(0, '', '', '', '', '', '', '', '');

    onSubmit() {
    }

    saveOrganization() {
        this.organizationService.saveOrganization(this.model).subscribe(
            data => { this.model = data; },
            error => alert('Error' + error));

        this.active = false;
        this.submitted = true;
        setTimeout(() => {this.active = true}, 2000);
    }
}

bootstrap(OrganizationFormComponent)