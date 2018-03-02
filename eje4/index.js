var people = Array();
var validaremail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var personas;
personas = {
    name: "Andres",
    email: "zldkfom",
    salary: 10000,
    active: true
};
people.push(personas);
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Andres" + i,
            email: "i" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 == 0 ? true : false
        };
        people.push(newPerson);
        //if (people[i].active==true && validaremail.test(people[i].email)) {
        //  console.log(people[i]);
        //}
    }
}
function validar() {
    var newPerson;
    for (var i = 0; i < people.length; i++) {
        if (people[i].active == true && validaremail.test(people[i].email)) {
            console.log(people[i]);
        }
    }
}
createPeople();
validar();
//console.log(people);
