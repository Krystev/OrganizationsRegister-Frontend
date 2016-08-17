System.register(['@angular/core', '../services/organization.service', '../rxjs-operators'], function(exports_1, context_1) {
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
    var core_1, organization_service_1;
    var OrganizationsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (organization_service_1_1) {
                organization_service_1 = organization_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            OrganizationsListComponent = (function () {
                function OrganizationsListComponent(organizationService) {
                    this.organizationService = organizationService;
                    this.mode = 'Observable';
                }
                OrganizationsListComponent.prototype.ngOnInit = function () { this.getOrganizations(); };
                OrganizationsListComponent.prototype.getOrganizations = function () {
                    var _this = this;
                    this.organizationService.getOrganizations().subscribe(function (organizations) { return _this.organizations = organizations; }, function (error) { return _this.errorMessage = error; });
                };
                OrganizationsListComponent.prototype.getBack = function () { window.location.href = './index'; };
                OrganizationsListComponent = __decorate([
                    core_1.Component({
                        selector: 'organizations-list',
                        templateUrl: 'app/components/organizations-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [organization_service_1.OrganizationService])
                ], OrganizationsListComponent);
                return OrganizationsListComponent;
            }());
            exports_1("OrganizationsListComponent", OrganizationsListComponent);
        }
    }
});
//# sourceMappingURL=organizations-list.component.js.map