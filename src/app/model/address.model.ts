export class Address {
  street: string;
  number: number;
  district: string;
  city: string;
  zipCode: string;

  addAddress(street: string, number: number, district: string, city: string, zipCode: string) {
    this.street = street;
    this.number = number;
    this.district = district;
    this.city = city;
    this.zipCode = zipCode;
  }
}
