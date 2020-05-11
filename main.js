const ratePerUSD = {
    "USD": 1,
    "VND": 23208.4,
    "EUR": 0.92397,
    "AUD": 1.53669,
    "MYR": 4.33376,
    "GBP": 0.80870,
    "KRW": 1,224.11
}

let rateA = 0;
let rateB = 0;
let from = "";
let to = "";
let amount = 0;
let result = 0;
let beautifulnumber = "";

function calculate() {
    amount = document.getElementById("amount").value;
    from = document.getElementById("from").value;
    to = document.getElementById("to").value;
    console.log(from + to + amount);
    getRatePerUSD();
    result = amount * rateB / rateA;
    result = result.toFixed(2);
    beautifulnumber = formatCurrency(to,result);
    document.getElementById("result").innerHTML = `${amount} ${from} to ${to} is ${beautifulnumber}`;
}

function switchPlace() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    document.getElementById("from").value = to;
    document.getElementById("to").value = from;
}

function getRatePerUSD() {
    for (let [key, value] of Object.entries(ratePerUSD)) {
        console.log(key, value)
        if (from === key) {rateA = value;}
        if (to === key) {rateB = value;}
    }
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }