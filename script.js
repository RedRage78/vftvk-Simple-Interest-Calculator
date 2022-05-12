function compute()
{
   
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
	//Check for positive values, if not creates and alert to enter a valid number
    var checker = parseInt(principal) > 0; //changes principal from a string to an integer
    if (!checker) {
        alert("Enter a positive number please");
        document.getElementById("principal").focus();//places focus on the principle form
		}
	else{	
	document.getElementById("result").innerHTML="If you deposit "+principal+"<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year "+year+"\<br\>"
	}
	
	

    
}
//changes the rate, and displays it next to the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}