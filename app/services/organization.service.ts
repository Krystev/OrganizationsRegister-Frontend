import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Organization }   from '../model/organization';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions, Request, RequestMethod } from '@angular/http';

@Injectable()
export class OrganizationService {

    constructor(private http: Http) { }

    private organizationsUrl = 'http://localhost:8080/list.json';  // URL to web API
    private saveOrganizationUrl = 'http://localhost:8080/register';
    getOrganizations(): Observable<Organization[]> {
        return this.http.get(this.organizationsUrl)
            .map(this.extractData)
            .map((organizations: Array<any>) => {
                let result: Array<Organization> = [];
                if (organizations) {
                    organizations.forEach((organization) => {
                        result.push(new Organization(organization.id, organization.organizationName,
                            organization.registerNumber, organization.registrationDate, organization.ownerName,
                            organization.organizationAddress, organization.organizationPostCode,
                            organization.organizationOccupation, organization.occupationDescription));
                    });
                }
                return result;
            });
 
  private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    saveOrganization(organization): Observable<Organization> {

        let body = JSON.stringify(organization);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        return this.http.post(this.saveOrganizationUrl, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}