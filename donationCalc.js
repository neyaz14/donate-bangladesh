document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href= 'blog.html';
})


document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const currentBalance = getCurrentBalance('current-balance');
        const currentBalanceFromTop = getCurrentBalance('noakhali-donated-amount');
        const inputAmount = getValueById('noakhali-donate-input');

        // validation check
        if(isNaN(inputAmount ) || inputAmount<0){
            alert("input correct amount");
            
           
            document.getElementById('my_modal_1').classList.remove('modal');
            document.getElementById('my_modal_1').classList.add('hidden');
            location.reload();
            return;
        }
        if(currentBalance < inputAmount){
            alert("Invalid Input Amount ");
            document.getElementById('my_modal_1').classList.add('hidden');
            document.getElementById('my_modal_1').classList.remove('modal');
            location.reload();
            return;
        }

        console.log(currentBalance, inputAmount, currentBalanceFromTop);

        const newCurrentBalance = currentBalance - inputAmount;
        document.getElementById('current-balance').innerText= newCurrentBalance;

        const newTopBalance = currentBalanceFromTop + inputAmount;
        document.getElementById('noakhali-donated-amount').innerText = newTopBalance;

// transaction history
// history added
        const divs= document.createElement('div');
        divs.className = 'border mx-auto w-[85%] p-4 mb-5 rounded-md';
        divs.innerHTML= `                     
            <p class="font-bold text-[16px]"> ${inputAmount} Taka is donated for Flood at Noakhali, Bangladesh </p> 
            <p class="text-gray-400 text-xs">Date: ${new Date()} </p>
        `;
        document.getElementById('history-section').prepend(divs);

    })






    // for feni 
    document.getElementById('feni-donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const currentBalance = getCurrentBalance('current-balance');
        const currentBalanceFromTop = getCurrentBalance('feni-donated-amount');
        const inputAmount = getValueById('feni-donate-input');

        // validation check
        if(isNaN(inputAmount ) || inputAmount<0){
            alert("input correct amount");
            document.getElementById('my_modal_2').classList.remove('modal');
            document.getElementById('my_modal_2').classList.add('hidden');
            location.reload();
            return;
        }
        if(currentBalance < inputAmount){
            alert("Invalid Input Amount ");
            document.getElementById('my_modal_2').classList.remove('modal');
            document.getElementById('my_modal_2').classList.add('hidden');
            location.reload();
            return;
        }

        console.log(currentBalance, inputAmount, currentBalanceFromTop);

        const newCurrentBalance = currentBalance - inputAmount;
        document.getElementById('current-balance').innerText= newCurrentBalance;

        const newTopBalance = currentBalanceFromTop + inputAmount;
        document.getElementById('feni-donated-amount').innerText = newTopBalance;


// history added
        const divs= document.createElement('div');
        divs.className = 'border mx-auto w-[85%] p-4 mb-5 rounded-md';
        divs.innerHTML= `                     
            <p class="font-bold text-[16px]">${inputAmount} Taka is for Flood Relief in Feni,Bangladesh </p> 
            <p class="text-gray-400 text-xs">Date: ${new Date()} </p>
        `;
        document.getElementById('history-section').prepend(divs);
                
        

    })


//  Quota protest
    
    document.getElementById('protest-donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const currentBalance = getCurrentBalance('current-balance');
        const currentBalanceFromTop = getCurrentBalance('protest-donated-amount');
        const inputAmount = getValueById('protest-donate-input');

        // validation check
        if(isNaN(inputAmount ) || inputAmount<0){
            alert("Invalid Input Amount");
            document.getElementById('my_modal_3').classList.remove('modal');
            document.getElementById('my_modal_3').classList.add('hidden');
            location.reload();
            return;
        }
        if(currentBalance < inputAmount){
            alert("Invalid Input Amount ");
            document.getElementById('my_modal_3').classList.remove('modal');
            document.getElementById('my_modal_3').classList.add('hidden');
            location.reload();
            return;
        }

        console.log(currentBalance, inputAmount, currentBalanceFromTop);

        const newCurrentBalance = currentBalance - inputAmount;
        document.getElementById('current-balance').innerText= newCurrentBalance;

        const newTopBalance = currentBalanceFromTop + inputAmount;
        document.getElementById('protest-donated-amount').innerText = newTopBalance;


// history added
        const divs= document.createElement('div');
        divs.className = 'border mx-auto w-[85%]  p-4 mb-5 rounded-md ';
        divs.innerHTML= `                     
            <p class="font-bold text-[16px]">${inputAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </p> 
            <p class="text-gray-400 text-xs">Date: ${new Date()} </p>
        `;
        document.getElementById('history-section').prepend(divs);
})

    // ------------- history and donate section btn task
document.getElementById('history-btn')
    .addEventListener('click', function(){

        document.getElementById('history-section').classList.remove('hidden');
        document.getElementById('donate-section').classList.add('hidden');
        
        document.getElementById('history-btn').classList.add('bg-lime-400');
        document.getElementById('donation-btn').classList.remove('bg-lime-400');
        document.getElementById('donation-btn').classList.add('bg-none');

        // to footer 
        // document.getElementById('footer').classList.remove('relative');
        document.getElementById('footer').classList.add('hidden');



    })
document.getElementById('donation-btn')
    .addEventListener('click', function(){
        document.getElementById('history-section').classList.add('hidden');
        document.getElementById('donate-section').classList.remove('hidden');

        document.getElementById('donation-btn').classList.add('bg-lime-400');
        document.getElementById('history-btn').classList.remove('bg-lime-400');
        document.getElementById('history-btn').classList.add('bg-none');

        document.getElementById('footer').classList.remove('hidden');
        document.getElementById('footer').classList.add('relative');
    })