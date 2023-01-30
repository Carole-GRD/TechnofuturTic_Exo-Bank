import { Account } from './Account.js';
export class Current extends Account {
    constructor(number, amount, owner, creditLine = 100) {
        super(number, amount, owner);
        this._creditLine = creditLine;
    }
    get creditLine() {
        return this._creditLine;
    }
    set creditLine(newCreditLine) {
        if (newCreditLine > 0 && !Number.isNaN(newCreditLine)) {
            this._creditLine = newCreditLine;
        }
    }
    // retrait(montant)
    // Permet de retirer un montant positif sur le solde du compte,
    // attention à ne pas descendre le solde en dessous de la ligne de crédit
    // ---------------------------------------------------
    removeAnAmount(amountToRemove) {
        if (amountToRemove > 0) {
            ;
            if ((this.amount - amountToRemove) > -this._creditLine) {
                return this.amount -= amountToRemove;
            }
        }
    }
}
