function calculate() {
    var billAmount = Number(document.getElementById("billAmount").value);
    var tipAmount = Number(document.getElementById("tipAmount").value)
    
    tipAmount = tipAmount / 100;

    var totalTip = billAmount * tipAmount;
    var tipHtml = "<h3>Total tip is: <small>$" + totalTip.toFixed(2) + "</small><h3>";
    document.querySelector(".tip-amount").innerHTML = tipHtml
    
    var billWithTip = billAmount + totalTip;
    var totalbill = "<h3>Total Bill with Tip: <small>$" + billWithTip.toFixed(2) + "</small></h3>";
    document.querySelector(".total-with-tip").innerHTML = totalbill;

    return [totalTip.toFixed(2), billWithTip.toFixed(2)]

}