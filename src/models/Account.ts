import { Person } from './Person.js';

export class Account {
    private _number: string;
    private _amount: number;
    private _owner: Person;

    constructor(number: string,
            amount: number,
            owner: Person) {
        this._number = number;
        this._amount = amount;
        this._owner = owner;
    }

    get number() {
        return this._number;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        this._amount = newAmount;
    }

    get owner() {
        return this._owner;
    }

    set owner(modifOwner: Person) {
        this.owner = modifOwner;
    }

    // depot(montant) 
    // permet d’ajouter un montant positif sur le solde du compte
    // ---------------------------------------------------
    public addAnAmount(amountToAdd: number) {
        if (amountToAdd > 0) {
            return this._amount += amountToAdd;
        }
    }
}