import { Account } from './Account.js';
import { Person } from './Person.js';

export class Current extends Account {

    private _creditLine: number;
    
    constructor(number: string,
                amount: number,
                owner: Person,
                creditLine: number = 100) {
        super(number, amount, owner);
        this._creditLine = creditLine;
    }
 
    get creditLine() {
        return this._creditLine;
    }

    set creditLine(newCreditLine: number) {
        if (newCreditLine > 0 && !Number.isNaN(newCreditLine)) {
            this._creditLine = newCreditLine;
        }
    }
    
    // retrait(montant)
    // Permet de retirer un montant positif sur le solde du compte,
    // attention à ne pas descendre le solde en dessous de la ligne de crédit
    // ---------------------------------------------------
    public removeAnAmount(amountToRemove: number) {
        if (amountToRemove > 0) {;
            if ((this.amount - amountToRemove) > -this._creditLine) {
                return this.amount -= amountToRemove;
            }
        } 
    }
}
