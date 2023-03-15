export class Person {
   date;
	firstName:string = "";
	lastName:string = "";
   age: number = 0;
   constructor(date: Date, firstName: string, lastName: string, age: number) {

      this.date = date;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      
   }
}