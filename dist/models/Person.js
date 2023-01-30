export class Person {
    constructor(lastName, firstName, birthDate) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._birthDate = birthDate;
    }
    get lastName() {
        return this._lastName;
    }
    get firstName() {
        return this._firstName;
    }
    get birthDate() {
        return this._birthDate;
    }
    set lastName(newLastName) {
        this._lastName = newLastName;
    }
    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }
    set birthDate(newBirthDate) {
        this._birthDate = newBirthDate;
    }
}
