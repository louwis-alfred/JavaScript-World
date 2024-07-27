const person = {
    firstname: 'Louwis',
    lastname: 'Alfred',
    fullname() {
        return `${this.firstname} ${this.lastname}`
    }
}

person.fullname(); // Output: Louwis Alfred
person.last = 'Saitama';
person.fullname(); // Output: Louwis Saitama

