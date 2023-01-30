export class Account {
    constructor(number, amount, owner) {
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
    set owner(modifOwner) {
        this.owner = modifOwner;
    }
    // depot(montant) 
    // permet d’ajouter un montant positif sur le solde du compte
    // ---------------------------------------------------
    addAnAmount(amountToAdd) {
        if (amountToAdd > 0) {
            return this._amount += amountToAdd;
        }
    }
}
