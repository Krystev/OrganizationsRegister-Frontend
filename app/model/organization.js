System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Organization;
    return {
        setters:[],
        execute: function() {
            Organization = (function () {
                function Organization(id1, organizationName1, registerNumber1, registrationDate1, ownerName1, organizationAddress1, organizationPostCode1, organizationOccupation1, occupationDescription1) {
                    this.id1 = id1;
                    this.organizationName1 = organizationName1;
                    this.registerNumber1 = registerNumber1;
                    this.registrationDate1 = registrationDate1;
                    this.ownerName1 = ownerName1;
                    this.organizationAddress1 = organizationAddress1;
                    this.organizationPostCode1 = organizationPostCode1;
                    this.organizationOccupation1 = organizationOccupation1;
                    this.occupationDescription1 = occupationDescription1;
                    this.id = id1;
                    this.organizationName = organizationName1;
                    this.registerNumber = registerNumber1;
                    this.registrationDate = registrationDate1;
                    this.ownerName = ownerName1;
                    this.organizationAddress = organizationAddress1;
                    this.organizationPostCode = organizationPostCode1;
                    this.organizationOccupation = organizationOccupation1;
                    this.occupationDescription = occupationDescription1;
                }
                return Organization;
            }());
            exports_1("Organization", Organization);
        }
    }
});
//# sourceMappingURL=organization.js.map