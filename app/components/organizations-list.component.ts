import { Component, OnInit } from '@angular/core';
import { Organization } from '../model/organization';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { OrganizationService } from '../services/organization.service';
import '../rxjs-operators';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'organizations-list',
    templateUrl: 'app/components/organizations-list.component.html',
    providers: [HTTP_PROVIDERS, OrganizationService]
})

export class OrganizationsListComponent implements OnInit {

    errorMessage: string;
    organizations: Organization[];
    mode = 'Observable';

    constructor(private organizationService: OrganizationService) { }

    ngOnInit() { this.getOrganizations(); }

    getOrganizations() {
        this.organizationService.getOrganizations().subscribe(organizations => this.organizations = organizations,
            error => this.errorMessage = <any>error);
    }

    getBack() { window.location.href = './index' }
}

bootstrap(OrganizationsListComponent, [
    HTTP_PROVIDERS,
    OrganizationService
]);