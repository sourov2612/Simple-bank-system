document.getElementById('deposit-btn-submit').addEventListener('click', function(){
    // For input field we will use .value
    const depositField = document.getElementById('deposit-amount')
    const depositAmountstring = depositField.value 
    const depositAmount = parseFloat(depositAmountstring);

    //If user enter a letter

    if(isNaN(depositAmount)){
        alert('Please provide a valid amount in number'); 
        return;
    }

    depositField.value = '';
    
    // for noninput field we will use .innertext 
    // Display deposite part
    const currentDepositelement = document.getElementById('display-deposit-amount'); 
    const stringCurrentDeposit = currentDepositelement.innerText 
    const currentDeposit = parseFloat(stringCurrentDeposit);
    const totalDeposit = (currentDeposit + depositAmount); 
    currentDepositelement.innerText = totalDeposit;

    //add in main balance 
    const currentBalanceamount = document.getElementById('display-balance-amount'); 
    const currentBalancestring = currentBalanceamount.innerText 
    const currentBalance = parseFloat(currentBalancestring); 
    const totalBalance = (currentBalance + depositAmount); 
    currentBalanceamount.innerText = totalBalance;
})