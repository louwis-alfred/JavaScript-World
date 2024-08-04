const person = {
    firstname: 'Louwis',
    secondname: 'Alfred',
    fullname() {
        return this.firstname + " " + this.secondname;
    }
}

console.log(person.fullname())