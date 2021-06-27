
function compute()// for calculate interest
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <strong>"  +principal+"</strong>,\<br\>at an interest rate of <strong>"+rate+"</strong>%\<br\>You will receive an amount of <strong>"+interest+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>"


}

function vor(){//for validating amount input more than 0
    var str,
element = document.getElementById('principal');
if (element != null) {
    str = element.value;
}
else {
    str = null;
}
    while (str <= 0){
    alert("Enter a positive number");
    str.focus()}
}

function updateRate() // for update rate of interest
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function totalCompute(){// for invoke two function in same event onclick
    vor();
    compute()
}