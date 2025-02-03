let count = 2;
let placeholderTotalBill = 'Enter Total Bill here';
let placeholderTips = 'Enter Tips here';

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('counts').textContent = count;
    document.getElementById('billinfo').placeholder = placeholderTotalBill;
    document.getElementById('Tips').placeholder = placeholderTips;
});

function increase() {
    count++;
    document.getElementById('counts').textContent = count;
}

function decrease() {
    if (count <= 1) {
        alert("Count cannot be less than 1");
        return;
    }
    count--;
    document.getElementById('counts').textContent = count;
}

function calculate() {
    let billinfo = parseFloat(document.getElementById('billinfo').value);
    let tips = parseFloat(document.getElementById('Tips').value);
    let people = count;

    if (isNaN(billinfo) || isNaN(tips)) {
        alert("Please enter valid numbers for bill and tips.");
        return;
    }

    let tipsAmount = (billinfo * tips) / 100;
    let tax = (billinfo * 5) / 100;
    let totalBill = billinfo + tipsAmount + tax;
    let totalPerPerson = totalBill / people;

    document.getElementById('totalbill').textContent = '$' + billinfo;
    document.getElementById('tipsAmountN').textContent = '$' + tipsAmount;
    document.getElementById('taxN').textContent = '$' + tax.toFixed(2);
    document.getElementById('totalN').textContent = '$' + totalPerPerson.toFixed(2);
}