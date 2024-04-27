document.getElementById('withdraw-btn-submit').addEventListener('click', function(){
    const withdrawField = document.getElementById('Withdraw-amount'); 
    const withdrawAmountString = withdrawField.value 
    const withdrawAmount = parseFloat(withdrawAmountString); 
    if(isNaN(withdrawAmount)){
        alert('Please provide a valid amount in number'); 
        return;
    }
    
    withdrawField.value = '';

    // Subtraction from main balance 
    const currentMainBalanceElement = document.getElementById('display-balance-amount'); 
    const currentMainBalanceString = currentMainBalanceElement.innerText 
    const currentMainBalance = parseFloat(currentMainBalanceString); 
    const totalMainBalance = (currentMainBalance - withdrawAmount); 
 

    if(withdrawAmount > totalMainBalance){
        alert('You dont have this much amount in your account');
        return;
    }

    // Set the update main balance
    currentMainBalanceElement.innerText = totalMainBalance

 
    // Display withdraw amount  
    const currenttwithdeawelement = document.getElementById('display-withdraw-amount'); 
    const currentWithdrawString = currenttwithdeawelement.innerText 
    const currentWithdraw = parseFloat(currentWithdrawString); 
    const totalWithdraw = (currentWithdraw + withdrawAmount); 
    currenttwithdeawelement.innerText = totalWithdraw;

})