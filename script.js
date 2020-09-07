var url = "http://data.fixer.io/api/latest?access_key=25c93d1d45dbc75ab24ba75668912e21&base=EUR&symbols=GBP,JPY,EUR,USD"
function recupererValeur() {
    $.ajax({
        url : url,
        type : "GET",
        success : function(res, status, req) {
            console.log("res", res);
            console.log("status", status);
            console.log("req", req);
            let rates = res.rates
            let amount = document.getElementById("fromAmount").value
            let from = document.getElementById("from").value

            let to = document.getElementById("to").value
            // console.log(amount, from, to);
            let result = amount * rates[to] / rates [from]
            document.getElementById("toAmount").value =result
        }
    })  
}
