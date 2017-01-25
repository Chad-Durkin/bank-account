function Account(name, password, transactionAmount) {
  this.accountName = name;
  this.accountBalance = transactionAmount;
  this.accountPassword = password;
  this.accountTransactionHistory;
}

var editAccount = function(accountArray, accountName, depositAmount, withdrawalAmount) {
  for(var index = 0; index < accountArray.length; index++) {
    if(accountArray[index].accountName === accountName) {
      var accountPassword = prompt("Enter the account's password: ");
      if(accountArray[index].accountPassword === accountPassword) {
        accountTransaction(accountArray[index], depositAmount, withdrawalAmount);
        console.log(accountArray[index]);
        return alert("Transaction Completed! Thank you for using Epicodus Credit Union!");
      } else {
          var accountPassword = prompt("The password you enter does not match the one we have on record, please try again: ");
          if(accountArray[index].accountPassword === accountPassword) {
            accountTransaction(accountArray[index], depositAmount, withdrawalAmount);
            console.log(accountArray[index]);
            return alert("Transaction Completed! Thank you for using Epicodus Credit Union!");
          } else {
              return alert("To many failed password attempts, please try again at a nother time");
          }
      }
    }
  }

  return alert("There is no account named: " + accountName + ".")
}

var accountTransaction = function(account, depositAmount, withdrawalAmount) {
  var balanceBefore = account.accountBalance;
  var balance = parseInt(account.accountBalance);
  balance += parseInt(depositAmount);
  balance -= parseInt(withdrawalAmount);
  if(balance < 0) {
    alet("You overdrew on your account! You have 10 days to add money into your account or you will be charged an overdraft fee");
  }
  var transaction = "Balance before: " + balanceBefore + ". Deposited: " + depositAmount + ". Withdrew: " + withdrawalAmount + ". Balance after: " + balance + ".";
  console.log(transaction);
  account.accountBalance = balance;
  console.log(account.accountBalance);
}

var accessAccount = function(accountsArray, accountName, accountPassword) {
  for(var index = 0; index < accountsArray.length; index++) {
    if(accountsArray[index].accountName === accountName && accountsArray[index].accountPassword === accountPassword) {
      console.log("it worked");
        return pullUpAccountInfo(accountsArray[index]);
    }
  }

  return alert("You entered an incorrect account name & password");
}

var pullUpAccountInfo = function(theAccount) {
  var accountName = theAccount.accountName;
  var accountBalance = theAccount.accountBalance;
  var accountPassword = theAccount.accountPassword;
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
    var accountNameEdit = $("input#account-name-edit").val();
    var depositAmount = $("input#deposit-amount").val();
    var withdrawalAmount = $("input#withdrawal-amount").val();

    //lookup account name from arrays and return it
    editAccount(accountsArray, accountNameEdit, depositAmount, withdrawalAmount);

    //clear forms
    $("input#account-name-edit").val("");
    $("input#deposit-amount").val("");
    $("input#withdrawal-amount").val("");
  })

  $("#lookup-account").submit(function(event) {
    event.preventDefault();
    var accountNameLookup = $("input#account-name-lookup").val();
    var accountPasswordLookup = $("input#account-password-lookup").val();

    accessAccount(accountsArray, accountNameLookup, accountPasswordLookup);

    $("input#account-name-lookup").val("");
    $("input#account-password-lookup").val("");
  })
})
