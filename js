var decimal = document.getElementById('Decimal')  

//document.querySelector(".convert").addEventListener('click',apper)
//function apper () {
//alert(fi.value)
//}
document.querySelector('.convert').addEventListener('click',convert) 
function convert (){
var binary = "" 
var res = decimal.value
while (res>0){
	if (res % 2 === 0){
		binary = "0"+binary;
	}
	else {
		binary = "1" +binary;
	}
	res = Math.floor(res/2)		
}

//alert (binary)
//return(binary)
	document.getElementById('Binary').value= binary
}



