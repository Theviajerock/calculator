var total = 0;
var tempNum;
var opeExpresion;

function pushNumber(num) {
	if (total === 0) {
		total = num.toString();
		document.getElementById('result').value = total;
		console.log(total);
		console.log(tempNum);
	} else if (typeof(total) === "string") {
        if (total[total.length - 1] == "*" || total[total.length - 1] == "/" || total[total.length - 1] == "+" || total[total.length - 1] == "-") {
			total = total + num;
			console.log(total);
			console.log(tempNum);
			document.getElementById('result').value = total;
		}
	};
};

function operation(operator) {
	if (typeof(total) != "undefined") {
		if (total[total.length - 1] != "*" || total[total.length - 1] != "/" || total[total.length - 1] != "+" || total[total.length - 1] != "-") {
			total = total + operator
		}
	}
};


function equal() {
	makeIt = eval(total);
	console.log(makeIt);
	total = makeIt;
	document.getElementById('result').value = total;
	
};