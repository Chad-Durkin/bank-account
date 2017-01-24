function Account(name, password, transactionAmount) {
  this.accountName = name;
  this.accountBalance = transactionAmount;
  this.accountPassword = password;
}

var lookupAccount = function(accountArray, accountName) {
  for(var index = 0; index < accountArray.length; index++) {
    if(accountArray[index].accountName === accountName) {
      return accountArray[index];
    }
  }

  return alert("There is no account named: " + accountName)
}

var accountTransaction = function(account, depositAmount, withdrawalAmount) {
  var balance = parseInt(account.accountBalance);
  balance += parseInt(depositAmount);
  balance -= parseInt(withdrawalAmount);
  account.accountBalance = balance;
  console.log(account.accountBalance);
}

$(document).ready(function() {
var accountsArray = [];

  $("#register-account").submit(function(event) {
    event.preventDefault();
    var newAccountName = $("input#account-name").val();
    var newAccountPassword = $("input#account-password").val();
    var initialDeposit = $("input#initial-deposit").val();

    //create a new account constructor
    var newAccount = new Account(newAccountName, newAccountPassword, initialDeposit);
    //input new account into the account holding array
    accountsArray.push(newAccount);

    //clear forms
    $("input#account-name").val("");
    $("input#account-password").val("");
    $("input#initial-deposit").val("");
  })

  $("#deposit-withdraw").submit(function(event) {
    event.preventDefault();
    var accountNameLookup = $("input#account-name-lookup").val();
    var depositAmount = $("input#deposit-amount").val();
    var withdrawalAmount = $("input#withdrawal-amount").val();


    //lookup account name from arrays and return it
    var accountCalled = lookupAccount(accountsArray, accountNameLookup);
    accountTransaction(accountCalled, depositAmount, withdrawalAmount);
    //add deposit ammount and subtract withdrawl ammount

    //if the account name is wrong, output "no account named i.e"
    //if withdrawl amount is more than account balance AFTER deposit, output "your account balance is to low to withdraw that amount"


    //clear forms
    $("input#account-name-lookup").val("");
    $("input#deposit-amount").val("");
    $("input#withdrawal-amount").val("");
  })
})
