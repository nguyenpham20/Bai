let number1 = document.getElementById("b1");
let number2 = document.getElementById("b2");
function sum() {
    let a = Number(number1.value) + Number(number2.value);
    alert (a);

}
function minus(){
    let b = Number(number1.value) - Number(number2.value);
    alert (b);
}
function multiply(){
    let c = Number(number1.value) * Number(number2.value);
    alert (c);
}
function share(){
    let d = Number(number1.value) / Number(number2.value);
    alert (d);
}