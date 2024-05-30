var reviews = [5, 5, 5.4, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("The grade is " + (total / reviews.length));
