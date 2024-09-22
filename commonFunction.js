function getValueById(id){
    const donateAmount = document.getElementById(id).value;
    const donateMoney = parseFloat(donateAmount);
    return donateMoney;
}

function getCurrentBalance(id){
    const current = document.getElementById(id).innerText;
    const currentBalance = parseFloat(current);
    return currentBalance;
}