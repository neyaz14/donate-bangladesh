
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

// transaction history
// history added
        const div= document.createElement('div');
        const h1= document.createElement('h1');
        const p= document.createElement('p');
        // p.classList.add('bg-red-600');
        h1.innerText =`${inputAmount} Taka is Donated  for Flood at Noakhali, Bangladesh`;
        p.innerText = ` Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)  `;

       
        document.getElementById('history-section').appendChild(div).classList.add('border','rounded-lg','mb-10','max-w-[80%]','mx-auto','border-blue-900');
        document.getElementById('history-section').appendChild(h1).classList.add('mb-1','max-w-[80%]','mx-auto');
        document.getElementById('history-section').appendChild(p).classList.add('mb-1','max-w-[80%]','mx-auto');



        document.getElementById('noakhali-donate-input').innerText=' ';

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


// history added
 
        const p= document.createElement('p');
        // const p= document.createElement('p');
        // p.classList.add('bg-red-600');
        p.innerText =`${inputAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh   Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time) `;
        // p.innerText = `  `;

       

        document.getElementById('history-section').appendChild(p).classList.add('border','mb-1','max-w-[80%]','mx-auto');
        // document.getElementById('history-section').appendChild(p).classList.add('mb-1','max-w-[80%]','mx-auto');


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


// history added
        const div= document.createElement('div');
        const h1= document.createElement('h1');
        const p= document.createElement('p');
        // p.classList.add('bg-red-600');
        h1.innerText =`${inputAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`;
        p.innerText = ` Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)  `;

       
        document.getElementById('history-section').appendChild(div).classList.add('border','rounded-lg','mb-10','max-w-[80%]','mx-auto','border-blue-900');
        document.getElementById('history-section').appendChild(h1).classList.add('mb-1','max-w-[80%]','mx-auto');
        document.getElementById('history-section').appendChild(p).classList.add('mb-1','max-w-[80%]','mx-auto');





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
        document.getElementById('footer').classList.remove('relative');
        document.getElementById('footer').classList.add('absolute');



    })
document.getElementById('donation-btn')
    .addEventListener('click', function(){
        document.getElementById('history-section').classList.add('hidden');
        document.getElementById('donate-section').classList.remove('hidden');

        document.getElementById('donation-btn').classList.add('bg-lime-400');
        document.getElementById('history-btn').classList.remove('bg-lime-400');
        document.getElementById('history-btn').classList.add('bg-none');

        document.getElementById('footer').classList.remove('absolute');
        document.getElementById('footer').classList.add('relative');
    })