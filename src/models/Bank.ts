import { Account } from './Account.js';


export class Bank {

    private _accounts: Account[];
    private _bankName: string;

    constructor(account: Account[], bankName: string = 'BBB') {
        this._accounts = [];
        this._bankName = bankName;
    }

    get accounts() {
        return this._accounts;
    }
    
    get bankName() {
        return this._bankName;
    }

    //  ajouterCompteCourant(compte) 
    // permet d’ajouter un compte courant à la liste des comptes
    public addAccount(account: Account) {
        this._accounts.push(account);
    }

    // compte(numéro) 
    // Récupérer un compte à l’aide du numéro de compte de ce dernier
    public getAccountByNumber(nbrTofind: string) {
        const accountToFind = this._accounts.find((account) => {
            if (account.number === nbrTofind) {
                return true;
            }
        })
        return accountToFind;   
    }

    // ====================================================================
    // NON demandé !!!!! 
    // Récupérer un (des) compte(s) à l’aide du nom et prenom de la personne
    public getAccountByName(lastNameToFind: string, firstNameToFind: string) {
        const getAccounts = this._accounts.filter((account) => {
            if (account.owner.lastName === lastNameToFind && account.owner.firstName === firstNameToFind) {
                return true;
            }
        });
        
        if (getAccounts) {
            return getAccounts;
        }
    }
    // ====================================================================


    // avoirsDesComptes(titulaire)
    // Permet de connaître la somme des soldes positifs des comptes 
    // appartenant au titulaire
    public getCreditOnAccounts(lastNameToFind: string, firstNameToFind: string) {

        const creditOnCurrents = this._accounts.filter((account) => {
            if (account.owner.lastName === lastNameToFind && account.owner.firstName === firstNameToFind) {
                console.log('solde : ', account.amount);
                if (account.amount > 0) {
                    return true;
                }
            }
        });
        
        let total: number = creditOnCurrents.reduce((total, account) => {
                return total + account.amount
            }, 0)

        return `Somme des soldes positifs : ${total}`;   
    }


    // calculDesInterets() 
    // Epargne : l’intérêt apporte un gain de 3% sur le solde
    // Courant : 
    // l’intérêt apporte un gain de 1,5% sur le solde si ce dernier est positif, 
    // sinon un endettement de 4%
    public interest() {

        this._accounts.forEach((account) => {
            let newAmount: number;
            
            if (account.number.charAt(0) === 's') {
                newAmount = Math.round((account.amount * 1.03) * 100) / 100;
                account.amount = newAmount; 
            }

            else if (account.number.charAt(0) === 'c') {
                if (account.amount > 0) {
                    newAmount = Math.round((account.amount * 1.015) * 100) / 100;
                    account.amount = newAmount;   
                }
                else {
                    newAmount = Math.round((account.amount * 1.04) * 100) / 100;
                    account.amount = newAmount;
                }
            } 
        });  
    }
}


