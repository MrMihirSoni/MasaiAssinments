"use strict";

let BankAccount = function(accountNumber, accountHolderName, type, balance){
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.type=type;
    this.balance=balance;

    /* If there is no any transections or any balance checling activities are not happining then the account is called a InActive account */
    let count=0;
    this.isActive = function(){
        if(count!==0) console.log("Account is Active");
        else console.log("Account is inActive");
    };

    this.deposite = function(amount){
        count++;
        this.balance+=amount;
    };
    this.withdraw = function(amount) {
        count++;
        if(this.balance>=amount && amount>0) this.balance-=amount;
    };
    this.checkBalance = function(){
        count++;
        console.log(this.balance)
    }
};
let allAccountDetails = [];
allRecord.map((ele,i)=>{
    let balance = allRecord[i].balance;
    allAccountDetails.push(balance)
})

console.log(allAccountDetails)
let bankAccount1 = new BankAccount(1234567891, "Harry Potter", "Savings", 9000);
let bankAccount2 = new BankAccount(1234567892, "Ron Weasley", "Savings", 456);
let bankAccount3 = new BankAccount(1234567893, "Hermione Granger", "Current", 24565);
let bankAccount4 = new BankAccount(1234567894, "Draco Malfoy", "Savings", 3562744667);


// bankAccount1.deposite(9000);

bankAccount2.withdraw(5000);

// bankAccount1.withdraw(18000);

bankAccount4.withdraw(23);

bankAccount2.deposite(3060);

// bankAccount1.checkBalance();
bankAccount2.checkBalance();
bankAccount3.checkBalance();
bankAccount4.checkBalance();

// console.log(getTotalBalance())
bankAccount1.isActive();
bankAccount2.isActive();
bankAccount3.isActive();
bankAccount4.isActive();
