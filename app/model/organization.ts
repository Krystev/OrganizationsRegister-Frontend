export class Organization {
	public id: number;
	public organizationName: string;
	public registerNumber: string;
	public registrationDate: string;
	public ownerName: string;
	public organizationAddress: string;
	public organizationPostCode: string;
	public organizationOccupation: string;
	public occupationDescription: string;
	
	constructor(
	public id1: number,
	public organizationName1: string,
	public registerNumber1: string,
	public registrationDate1: string,
	public ownerName1: string,
	public organizationAddress1: string,
	public organizationPostCode1: string,
	public organizationOccupation1: string,
	public occupationDescription1: string
	) {
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
	
	
}