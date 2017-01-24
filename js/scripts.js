function Account(name, password, transactionAmount) {
  this.accountName = name;
  this.accountBalance = transactionAmount;
  this.accountPassword = password;
}

$(document).ready(function() {

  $("#register-account").submit(function(event) {
    event.preventDefault();
    var accountsArray = [];
    var newAccountName = $("input#account-name").val();
    var newAccountPassword = $("input#account-password").val();
    var initialDeposit = $("input#initial-deposit").val();

    //create a new account constructor
    var newAccount = new Account(newAccountName, newAccountPassword, initialDeposit);
    //input new account into the account holding array
    accountsArray.push(newAccount);

    console.log(accountsArray[0]);


    //clear forms
    $("input#account-name").val("");
    $("input#account-password").val("");
    $("input#initial-deposit").val("");
  })

  $("#deposit-withdraw").submit(function(event) {
    event.preventDefault();
    var depositAmount = $("input#deposit-amount").val();
    var withdrawalAmount = $("input#withdrawal-amount").val();

    //clear forms
    $("input#deposit-amount").val("");
    $("input#withdrawal-amount").val("");
  })
})
