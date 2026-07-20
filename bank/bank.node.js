/**
 * bank.node - Main Module
 * Module 2: Imports Module 1 (account.js) and demonstrates its functionality
 */

// Import Module 1
const account = require('./account.js');

console.log("========================================");
console.log("      BANK ACCOUNT MODULE DEMO");
console.log("========================================\n");

// Show initial balance
console.log(`Initial Balance: $${account.getBalance()}\n`);

// Perform deposits
console.log("--- Deposit Operations ---");
let result = account.deposit(500);
console.log(result.message);

result = account.deposit(200);
console.log(result.message);

result = account.deposit(-50);
console.log(`Error: ${result.message}`);

// Show balance after deposits
console.log(`\nBalance after deposits: $${account.getBalance()}\n`);

// Perform withdrawals
console.log("--- Withdrawal Operations ---");
result = account.withdraw(300);
console.log(result.message);

result = account.withdraw(100);
console.log(result.message);

result = account.withdraw(5000);
console.log(`Error: ${result.message}`);

result = account.withdraw(-20);
console.log(`Error: ${result.message}`);

// Show final balance
console.log(`\n--- Final Account Summary ---`);
console.log(`Final Balance: $${account.getBalance()}`);
console.log("========================================");

