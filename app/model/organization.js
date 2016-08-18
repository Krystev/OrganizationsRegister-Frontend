System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Organization;
    return {
        setters:[],
        execute: function() {
            Organization = (function () {
                function Organization(id, organizationName, registerNumber, registrationDate, ownerName, organizationAddress, organizationPostCode, organizationOccupation, occupationDescription) {
                    this.id = id;
                    this.organizationName = organizationName;
                    this.registerNumber = registerNumber;
                    this.registrationDate = registrationDate;
                    this.ownerName = ownerName;
                    this.organizationAddress = organizationAddress;
                    this.organizationPostCode = organizationPostCode;
                    this.organizationOccupation = organizationOccupation;
                    this.occupationDescription = occupationDescription;
                    this.id1 = id;
                    this.organizationName1 = organizationName;
                    this.registerNumber1 = registerNumber;
                    this.registrationDate1 = registrationDate;
                    this.ownerName1 = ownerName;
                    this.organizationAddress1 = organizationAddress;
                    this.organizationPostCode1 = organizationPostCode;
                    this.organizationOccupation1 = organizationOccupation;
                    this.occupationDescription1 = occupationDescription;
                }
                return Organization;
            }());
            exports_1("Organization", Organization);
        }
    }
});
//# sourceMappingURL=organization.js.map