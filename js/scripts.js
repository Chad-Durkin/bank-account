function Account(name, password, transactionAmount) {
  this.accountName = name;
  this.accountBalance = transactionAmount;
  this.accountPassword = password;
}



$(document).ready(function() {

  $("#register-account").submit(function(event) {
    event.preventDefault();
    var newAccountName = $("input#account-name").val();
    var newAccountPassword = $("input#account-password").val();
    var initialDeposit = $("input#initial-deposit").val();

    console.log(newAccountName);
    console.log(newAccountPassword);
    console.log(initialDeposit);
    $("input#account-name").val("");
    $("input#account-password").val("");
    $("input#initial-deposit").val("");
  })

  $("#deposit-withdraw").submit(function(event) {
    event.preventDefault();
    var depositAmount = $("input#deposit-amount").val();
    var withdrawalAmount = $("input#withdrawal-amount").val();

    console.log(depositAmount);
    console.log(withdrawalAmount);

    $("input#deposit-amount").val("");
    $("input#withdrawal-amount").val("");
  })
})
