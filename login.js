document.getElementById('btn-submit').addEventListener('click', function(){
    // step2 : get the email address inside the email input field 
    // always remember to use .value to get text from an input field 

    const emailField = document.getElementById('user-email'); 
    const email = emailField.value; 

    const passField = document.getElementById('user-pass');
    const password = passField.value;

    // console.log(email, password);

    if(email === 'shuvo@gmail.com' && password === 'hunter'){
        window.location.href = 'bank.html';
    }else(
        alert('Username or password is incorrect')
    )

})