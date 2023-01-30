// ============================================
// -----------  Compte bancaire  --------------
// ============================================


import { Person } from './models/Person.js';
import { Current } from './models/Current.js';
import { Saving } from './models/Saving.js';
// import { Account } from './models/Account.js';
import { Bank } from './models/Bank.js';


// Les propriétaires d'un compte
// -----------------------------
const person1 = new Person('Ergo', 'Martin', new Date('2006-05-01'));
const person2 = new Person('Mouillard', 'Sam', new Date('2003-11-17'));
const person3 = new Person('Gillet', 'Andy', new Date('2006-09-08'));
const person4 = new Person('Gillet', 'Jesse', new Date('2009-02-05'));
const person5 = new Person('Guiot', 'Sophie', new Date('2007-12-29'));
const person7 = new Person('Briquemont', 'Saliha', new Date('1990-06-24'));
const person8 = new Person('Spirlet', 'Aurélie', new Date('1978-04-12'));
const person9 = new Person('Mathys', 'Eddy', new Date('1990-06-24'));



// Les comptes courants
// --------------------
const current1 = new Current('c1', 240, person1);
const current2 = new Current('c2', -240, person2);
const current3 = new Current('c3', 50, person3);
const current4 = new Current('c4', 10, person4);
const current5 = new Current('c5', 426, person5);
const current6 = new Current('c6', -10, person3);
const current7 = new Current('c7', 63, person7);



// Les comptes épargnes
// --------------------
const saving1 = new Saving('s1', 30, person1, new Date('2022-01-15'));
const saving2 = new Saving('s2', 120, person2, new Date('2021-12-05'));
const saving3 = new Saving('s3', 20, person3, new Date('2021-12-27'));
const saving4 = new Saving('s4', 24, person7, new Date('2021-11-18'));
const saving5 = new Saving('s5', 426, person8, new Date('2022-01-01'));
const saving6 = new Saving('s6', 50, person9, new Date('2021-12-31'));



// La banque
// ---------
const bank = new Bank([]);


// ----------------   COMPTES COURANTS  ------------------------

// ajouterCompte(compte) (
// Permet d’ajouter un compte à la liste des comptes COURANTS
// ---------------------------------------------------
bank.addAccount(current1);
bank.addAccount(current2);
bank.addAccount(current3);
bank.addAccount(current4);
bank.addAccount(current5);
bank.addAccount(current6);
bank.addAccount(current7);



// ----------------   COMPTES EPARGNES  ------------------------

// ajouterCompte(compte) (
// Permet d’ajouter un compte à la liste des comptes EPARGNES
// ---------------------------------------------------
bank.addAccount(saving1);
bank.addAccount(saving2);
bank.addAccount(saving3);
bank.addAccount(saving4);
bank.addAccount(saving5);
bank.addAccount(saving6);





// ----------------   COMPTES COURANTS  ------------------------
// depot(montant) 
// Permet d’ajouter un montant positif sur le solde du compte
// retrait(montant) 
// Permet de retirer un montant positif sur le solde du compte,
// attention à ne pas descendre le solde en dessous de la ligne de crédit
// ---------------------------------------------------
// console.log('Ancien montant : ', current1.amount);
// console.log('retrait');
// current1.removeAnAmount(330);
// console.log('Nouveau montant : ', current1.amount);
// console.log('---------------------');
// console.log('Ancien montant : ', current1.amount);
// current1.addAnAmount(300);
// console.log('ajout');
// console.log('Nouveau montant : ', current1.amount);



// ----------------   COMPTES EPARGNES  ------------------------
// depot(montant) 
// Permet d’ajouter un montant positif sur le solde du compte
// retrait(montant) 
// Permet de retirer un montant positif sur le solde du compte,
// attention à ne pas descendre le solde en dessous de 0
// ---------------------------------------------------
// console.log('Ancien montant : ', saving1.amount);
// console.log('retrait');
// saving1.removeAnAmount(10);
// console.log('Nouveau montant : ', saving1.amount);
// console.log('---------------------');
// console.log('Ancien montant : ', saving1.amount);
// console.log('ajout');
// saving1.addAnAmount(300);
// console.log('Nouveau montant : ', saving1.amount);




// compte(numéro) 
// Récupérer un compte à l’aide du numéro de compte de ce dernier
// ---------------------------------------------------
// console.log(bank.getAccountByNumber('c3'));
// console.log(bank.getAccountByNumber('c6'));




// avoirsDesComptes(titulaire)
// Permet de connaître la somme des soldes positifs des comptes 
// appartenant au titulaire
// ---------------------------------------------------
// console.log('Ergo', 'Martin');
// console.log(bank.getCreditOnAccounts('Ergo', 'Martin'));
// console.log('---------------------');
// console.log('Gillet', 'Andy');
// console.log(bank.getCreditOnAccounts('Gillet', 'Andy'));





// NON demandé !!!!!
// Récupérer un (des) compte(s) à l’aide du nom et prenom de la personne
// ---------------------------------------------------
// console.log('Gillet', 'Andy');
// console.log(bank.getAccountByName('Gillet', 'Andy'));
// console.log('---------------------');
// console.log('Gillet', 'Jesse');
// console.log(bank.getAccountByName('Gillet', 'Jesse'));
// console.log('---------------------');
// console.log('Mathys', 'Eddy');
// console.log(bank.getAccountByName('Mathys', 'Eddy'));




// calculDesInterets() 
// Epargne : l’intérêt apporte un gain de 3% sur le solde
// ---------------------------------------------------
// console.log('SANS intérêt : ', saving1.amount);
// bank.interest();
// console.log('AVEC intérêt : ', saving1.amount);





// calculDesInterets() 
// Courant : 
// l’intérêt apporte un gain de 1,5% sur le solde si ce dernier est positif, 
// sinon un endettement de 4%
// ---------------------------------------------------
// console.log('SANS intérêt (compte 1) : ', current1.amount);
// console.log('SANS intérêt (compte 2) : ', current2.amount)
// console.log('----------------');
// bank.interest();
// console.log('AVEC intérêt (compte 1) : ', current1.amount);
// console.log('AVEC intérêt (compte 2) : ', current2.amount);




// console.log(bank);