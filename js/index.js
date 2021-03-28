let operators = document.getElementsByClassName('operator');
let numbers = document.getElementsByClassName('number');
let history = document.getElementById('history-value');
let output = document.getElementById('output-value');

//  HISTORY FUNCTIONS

function printHistory(num) {
	history.innerText = num;
}

function getHistory() {
	return history.innerText;
}

// OUTPUT FUNCTIONS

function getOutput() {
	return output.innerText;
}

function printOutput(num) {
	num == ''
		? (output.innerText = num)
		: (output.innerText = getFormattedNumber(num));
}

// FUNCTION TO FORMAT NUMBER VALUE
function getFormattedNumber(num) {
	if (num == '-') {
		return '';
	}
	let n = Number(num);
	let value = n.toLocaleString('en');
	return value;
}

// REMOVE COMMAS FROM FORAMT VALUE
function reverseNumberFormat(num) {
	return Number(num.replace(/,/g, ''));
}

// FUNCTIONALITY FOR NUMBER BUTTONS

for (let number of numbers) {
	number.addEventListener('click', () => {
		// get current output
		let value = reverseNumberFormat(getOutput());
		if (value != NaN) {
			value = value + number.id;
			printOutput(value);
		}
	});
}

// FUNCTIONALITY FOR OPERATORS

for (let operator of operators) {
	operator.addEventListener('click', () => {
		if (operator.id == 'clear') {
			printHistory('');
			printOutput('');
		} else if (operator.id == 'backspace') {
			let value = reverseNumberFormat(getOutput()).toString();
			// check if value exist
			if (value) {
				value = value.substr(0, value.length - 1);
				printOutput(value);
			}
		} else {
			outputValue = getOutput();
			historyValue = getHistory();

			if (outputValue == '' && historyValue != '') {
				if (isNan(historyValue[historyValue.length - 1])) {
					historyValue = historyValue.substr(0, historyValue.length - 1);
				}
			}

			if (outputValue != '' || historyValue != '') {
				outputValue =
					outputValue == '' ? outputValue : reverseNumberFormat(outputValue);
				historyValue = historyValue + outputValue;
				if (operator.id == '=') {
					var result = eval(historyValue);
					printOutput(result);
					printHistory('');
				} else {
					historyValue = historyValue + operator.id;
					printHistory(historyValue);
					printOutput('');
				}
			}
		}
	});
}
