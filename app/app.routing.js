System.register(['@angular/router', './components/organization-form.component', './components/organizations-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, organization_form_component_1, organizations_list_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (organization_form_component_1_1) {
                organization_form_component_1 = organization_form_component_1_1;
            },
            function (organizations_list_component_1_1) {
                organizations_list_component_1 = organizations_list_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/organization-register',
                    pathMatch: 'full'
                },
                {
                    path: 'organization-register',
                    component: organization_form_component_1.OrganizationFormComponent
                },
                {
                    path: 'organizations-list',
                    component: organizations_list_component_1.OrganizationsListComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map