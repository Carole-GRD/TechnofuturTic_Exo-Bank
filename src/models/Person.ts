export class Person {
    private _lastName: string;
    private _firstName: string;
    private _birthDate: Date;

    constructor(lastName: string, firstName: string, birthDate: Date) {
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

    set lastName(newLastName: string) {
        this._lastName = newLastName;
    }

    set firstName(newFirstName: string) {
        this._firstName = newFirstName;
    }

    set birthDate(newBirthDate: Date) {
        this._birthDate = newBirthDate;
    }
}