System.register(['@angular/core', '../model/organization', '@angular/platform-browser-dynamic', '../services/organization.service'], function(exports_1, context_1) {
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
    var core_1, organization_1, platform_browser_dynamic_1, organization_service_1;
    var OrganizationFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (organization_1_1) {
                organization_1 = organization_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (organization_service_1_1) {
                organization_service_1 = organization_service_1_1;
            }],
        execute: function() {
            OrganizationFormComponent = (function () {
                function OrganizationFormComponent(organizationService) {
                    this.organizationService = organizationService;
                    this.active = true;
                    this.submitted = false;
                    this.model = new organization_1.Organization(0, '', '', '', '', '', '', '', '');
                }
                OrganizationFormComponent.prototype.onSubmit = function () {
                };
                OrganizationFormComponent.prototype.saveOrganization = function () {
                    var _this = this;
                    this.organizationService.saveOrganization(this.model).subscribe(function (data) { _this.model = data; }, function (error) { return alert('Error' + error); });
                    this.active = false;
                    this.submitted = true;
                    setTimeout(function () { return _this.active = true; }, 5000);
                };
                OrganizationFormComponent = __decorate([
                    core_1.Component({
                        selector: 'organization-form',
                        templateUrl: 'app/components/organization-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [organization_service_1.OrganizationService])
                ], OrganizationFormComponent);
                return OrganizationFormComponent;
            }());
            exports_1("OrganizationFormComponent", OrganizationFormComponent);
            platform_browser_dynamic_1.bootstrap(OrganizationFormComponent);
        }
    }
});
//# sourceMappingURL=organization-form.component.js.map