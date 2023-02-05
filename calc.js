
// display content of each key when pressed
function displayContent(key){
    calculatorScreen.value += key
}
function allClear(){
    calculatorScreen.value = ""
}
function evaluateExpr(){
    calculatorScreen.value = eval(calculatorScreen.value)
}
function backContent(){
    calculatorScreen.value = calculatorScreen.value.slice(0,-1)
}