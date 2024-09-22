
document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const currentBalance = getCurrentBalance('current-balance');
        const currentBalanceFromTop = getCurrentBalance('noakhali-donated-amount');
        const inputAmount = getValueById('noakhali-donate-input');

        if(currentBalance < inputAmount){
            alert("Invalid Input Amount ");
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
        }

        console.log(currentBalance, inputAmount, currentBalanceFromTop);

        const newCurrentBalance = currentBalance - inputAmount;
        document.getElementById('current-balance').innerText= newCurrentBalance;

        const newTopBalance = currentBalanceFromTop + inputAmount;
        document.getElementById('noakhali-donated-amount').innerText = newTopBalance;


    })


    // for feni 
    document.getElementById('feni-donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const currentBalance = getCurrentBalance('current-balance');
        const currentBalanceFromTop = getCurrentBalance('feni-donated-amount');
        const inputAmount = getValueById('feni-donate-input');

        if(currentBalance < inputAmount){
            alert("Invalid Input Amount ");
            document.getElementById('my_modal_2').classList.add('hidden');
            return;
        }

        console.log(currentBalance, inputAmount, currentBalanceFromTop);

        const newCurrentBalance = currentBalance - inputAmount;
        document.getElementById('current-balance').innerText= newCurrentBalance;

        const newTopBalance = currentBalanceFromTop + inputAmount;
        document.getElementById('feni-donated-amount').innerText = newTopBalance;


    })


//  Quota protest
    // for feni 
    document.getElementById('protest-donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const currentBalance = getCurrentBalance('current-balance');
        const currentBalanceFromTop = getCurrentBalance('protest-donated-amount');
        const inputAmount = getValueById('protest-donate-input');

        if(currentBalance < inputAmount){
            alert("Invalid Input Amount ");
            document.getElementById('my_modal_3').classList.add('hidden');
            return;
        }

        console.log(currentBalance, inputAmount, currentBalanceFromTop);

        const newCurrentBalance = currentBalance - inputAmount;
        document.getElementById('current-balance').innerText= newCurrentBalance;

        const newTopBalance = currentBalanceFromTop + inputAmount;
        document.getElementById('protest-donated-amount').innerText = newTopBalance;


    })