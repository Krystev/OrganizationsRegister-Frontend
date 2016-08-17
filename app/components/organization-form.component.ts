import { Component } from '@angular/core';
import { Organization } from '../model/organization'
import { bootstrap } from '@angular/platform-browser-dynamic'

@Component({
  selector: 'organization-form',
  templateUrl: 'app/components/organization-form.component.html'
  
})
export class OrganizationFormComponent { 
componentName: 'OrganizationFormComponent'
model = new Organization(1, 'VSO', '123dad2', '2016-08-11', 'Emo', 'Kokiche 14', '3000', 'Training', 'Training description');

submitted = false;

onSubmit() {window.location.href = './index'}
getOrganizationsList() {
window.location.href = 'http://localhost:8080/list';
}

get diagnostic() {return JSON.stringify(this.model);}
}
bootstrap(OrganizationFormComponent)