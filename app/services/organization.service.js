System.register(['@angular/core', '@angular/http', '../model/organization', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, organization_1, Observable_1;
    var OrganizationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (organization_1_1) {
                organization_1 = organization_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            OrganizationService = (function () {
                function OrganizationService(http) {
                    this.http = http;
                    this.organizationsUrl = 'http://localhost:8080/list.json'; // URL to web API
                }
                OrganizationService.prototype.getOrganizations = function () {
                    return this.http.get(this.organizationsUrl)
                        .map(this.extractData)
                        .map(function (organizations) {
                        var result = [];
                        if (organizations) {
                            organizations.forEach(function (organization) {
                                result.push(new organization_1.Organization(organization.id, organization.organizationName, organization.registerNumber, organization.registrationDate, organization.ownerName, organization.organizationAddress, organization.organizationPostCode, organization.organizationOccupation, organization.occupationDescription));
                            });
                        }
                        return result;
                    });
                };
                OrganizationService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body;
                };
                OrganizationService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                OrganizationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OrganizationService);
                return OrganizationService;
            }());
            exports_1("OrganizationService", OrganizationService);
        }
    }
});
//# sourceMappingURL=organization.service.js.map