import { Account } from './Account.js';
import { Person } from './Person.js';

export class Saving extends Account {
    
    private _dateOfLastRemove: Date;

    constructor(number: string,
                amount: number,
                owner: Person,
                dateOfLastRemove: Date) {
        super(number, amount, owner);
        this._dateOfLastRemove = dateOfLastRemove;
    }

    get dateOfLastRemove() {
        return this._dateOfLastRemove;
    }

    // retrait(montant) 
    // Permet de retirer un montant positif sur le solde du compte,
    // attention à ne pas descendre le solde en dessous de 0
    // ---------------------------------------------------
    public removeAnAmount(amountToRemove: number) {
        if (amountToRemove > 0) {
            if ((this.amount - amountToRemove) >= 0) {
                return this.amount -= amountToRemove;  
            } 
        }
    }   
    
}