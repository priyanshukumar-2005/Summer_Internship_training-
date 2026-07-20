/**
 * Module 1: Bank Account Module
 * Provides balance management, deposit, and withdraw functionality
 */

let balance = 1000; // Initial balance

/**
 * Get current balance
 * @returns {number} Current balance
 */
function getBalance() {
    return balance;
}

/**
 * Deposit money into the account
 * @param {number} amount - Amount to deposit
 * @returns {object} Result with success status and new balance
 */
function deposit(amount) {
    if (amount <= 0) {
        return { success: false, message: "Deposit amount must be positive", balance };
    }
    balance += amount;
    return { success: true, message: `Deposited $${amount} successfully`, balance };
}

/**
 * Withdraw money from the account
 * @param {number} amount - Amount to withdraw
 * @returns {object} Result with success status and new balance
 */
function withdraw(amount) {
    if (amount <= 0) {
        return { success: false, message: "Withdrawal amount must be positive", balance };
    }
    if (amount > balance) {
        return { success: false, message: "Insufficient balance", balance };
    }
    balance -= amount;
    return { success: true, message: `Withdrew $${amount} successfully`, balance };
}

// Export the functions and balance
module.exports = {
    getBalance,
    deposit,
    withdraw
};

