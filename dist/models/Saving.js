import { Account } from './Account.js';
export class Saving extends Account {
    constructor(number, amount, owner, dateOfLastRemove) {
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
    removeAnAmount(amountToRemove) {
        if (amountToRemove > 0) {
            if ((this.amount - amountToRemove) >= 0) {
                return this.amount -= amountToRemove;
            }
        }
    }
}
