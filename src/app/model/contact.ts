export class Contact {

    id: number;

    constructor(
      public name: string,
      public firstNumber: string,
      public altNumber: string,
      public email: string,
      public contactType: string
    ){

    }

    setId(id){
      this.id = id;
    }

    getId(){
      return this.id;
    }

    getName(){
      return this.name;
    }

    getFirstNumber(){
      return this.firstNumber;
    }

    getAltNumber(){
      return this.altNumber;
    }

    getEmail(){
      return this.email;
    }

    getContactType(){
      return this.contactType;
    }

    setName(name: string){
      this.name = name;
      return this;
    }

    setFirstNumber(number: string){
      this.firstNumber = number;
      return this;
    }

    setAltNumber(number: string){
      this.altNumber = number;
      return this;
    }

    setEmail(email: string){
      this.email = email;
      return this;
    }

    setContactType(contactType: string){
      this.contactType = contactType;
      return this;
    }

    getTypeInitial(){
      return this.contactType.substr(0, 1);
    }

    toString(){
      return this.name.concat(" ", this.firstNumber, " ", this.altNumber, " ", this.email, " ", this.contactType);
    }

}
