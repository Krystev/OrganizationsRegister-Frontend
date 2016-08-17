import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Organization }   from '../model/organization';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OrganizationService {
  constructor (private http: Http) {}
  
  private organizationsUrl = 'http://localhost:8080/list.json';  // URL to web API
  
  getOrganizations(): Observable<Organization[]> {
    return this.http.get(this.organizationsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}