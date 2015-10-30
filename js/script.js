var total = 0;
var totalString;
var tempNum;
var opeExpresion;
//Function that receive the push button of the numbers
function pushNumber(num) {
	if (total === 0) {
		total = num.toString();
		document.getElementById('result').value = total;
		console.log(total);
		console.log(tempNum);
	} else if (typeof(total) === "string") {
        
			total = total + num.toString();
			console.log(total);
			console.log(tempNum);
			document.getElementById('result').value = total
		
	}else if(total[total.length-1] == '.' ){}
};

//Function that receive the push button of the operators
function operation(operator) {
	if (typeof(total) != "undefined") {
		if (total[total.length - 1] == "*" || 
			total[total.length - 1] == "/" || 
			total[total.length - 1] == "+" || 
			total[total.length - 1] == "-") {
		}else if(total[total.length-1] == '.' ) {

		}else{total = total + operator;}
	}
};


function equal() {
	var makeTheOperation = eval(total);
	total = makeTheOperation;
	document.getElementById('result').value = total.toFixed(2);
	
};

function clearResult() {
  total = 0;
  document.getElementById('result').value = total

};