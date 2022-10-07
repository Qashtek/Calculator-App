
//VARIABLE FOR CALCULATOR SCREEN
let display = document.getElementById('screen');

// FUNCTION TO RENDER KEY VALUES ON SCREEN
function render(val){
	display.value += val;
}

// CLEAR SCREEN FUNCTION
function clearScreen(){
	display.value = "";
}

// DELETE VALUE FUNCTION
function delVal(){
	display.value = display.value.slice(0,-1);
}

// FUNCTION TO CALCULATE VALUES ON SCREEN 
function Calculate(){

	try{
		display.value = eval(display.value);
	}
	catch(error){
		display.value = "Syntax error";
	}
}