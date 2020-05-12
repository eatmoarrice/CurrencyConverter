const ratePerUSD = {
    "USD": 1,
    "VND": 23208.4,
    "EUR": 0.92397,
    "AUD": 1.53669,
    "MYR": 4.33376,
    "GBP": 0.80870,
    "KRW": 1224.11
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
    document.getElementById("result").innerHTML = `${amount} <span class="cur">${from}</span> to <span class="cur">${to}</span> is <span class="num">${beautifulnumber}</span>`;
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

  function coinExchange() {
    document.getElementById("bill-result").innerHTML = "";
    let bills = [
        [500000,0],
        [200000,0],
        [100000,0],
        [50000,0],
        [20000,0],
        [10000,0],
        [5000,0],
        [2000,0],
        [1000,0],
    ];
    let totalvnd = document.getElementById("vnd-amount").value;
    if (totalvnd > 0){
        for (let i = 0; i < bills.length; i++){
            while (totalvnd/bills[i][0]>=1){
                bills[i][1]+=1;
                totalvnd -= bills[i][0];
            }
            if (bills[i][1]>0) {
                    document.getElementById("bill-result").innerHTML += `<div class="line-item">
                    <img src="img/${bills[i][0]}.jpg" height="50px"   > x ${bills[i][1]}
                </div>
                    `;
            }
        }
    }
    else {
        alert("Please enter a valid amount.")
    }
  }