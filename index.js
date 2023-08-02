function formatMoney(value) {
    value = Math.ceil(value * 100)/ 100
    value = value.toFixed(2)
    return "$ " + value 
}

function formatSplit(value) {
    if (value == 1) return value + " pessoa" 
      return value + " pessoas"  
    
}


function update() {
    let bill = Number(document.getElementById("yourBill").value)
    let tipPercent = document.getElementById("tipInput").value
    let split = document.getElementById("splitInput").value
    
    let tipValue = bill * (tipPercent / 100)
    let billtotal = bill + tipValue 
    let billEach = billtotal / split 
    
    document.getElementById("tipPercent").innerHTML = tipPercent + " %"
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue)
    document.getElementById("totalWithTip").innerHTML = formatMoney(billtotal)
    document.getElementById("splitValue").innerHTML = formatSplit(split)
    document.getElementById("billEach").innerHTML = formatMoney(billtotal / split)
} 