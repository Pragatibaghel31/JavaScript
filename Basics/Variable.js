const accountId= 14453
let accounEmail="pragatibaghel63602@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
//accountId=2 not allowed
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accounEmail,accountPassword, accountCity, accountState])
