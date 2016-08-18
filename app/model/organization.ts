export class Organization {
	public id1: number;
	public organizationName1: string;
	public registerNumber1: string;
	public registrationDate1: string;
	public ownerName1: string;
	public organizationAddress1: string;
	public organizationPostCode1: string;
	public organizationOccupation1: string;
	public occupationDescription1: string;
	
	constructor(
	public id: number,
	public organizationName: string,
	public registerNumber: string,
	public registrationDate: string,
	public ownerName: string,
	public organizationAddress: string,
	public organizationPostCode: string,
	public organizationOccupation: string,
	public occupationDescription: string
	) {
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
	
	
}