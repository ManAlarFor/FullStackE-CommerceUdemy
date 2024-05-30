var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
//new instance
var myCustomer = new Customer("Martin", "Matin");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
