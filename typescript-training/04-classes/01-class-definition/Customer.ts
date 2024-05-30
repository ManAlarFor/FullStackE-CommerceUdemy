class Customer {

    firstName: string ;
    lastName: string ;

    constructor(firstName: string, lastName: string ){
        this.firstName = firstName ;
        this.lastName = lastName ;
    }

}

//new instance

let myCustomer = new Customer("Martin", "Matin") ;


console.log(myCustomer.firstName)
console.log(myCustomer.lastName)