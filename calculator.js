function addition()
{
    var inputbox = document.getElementById("num1")
    var number1 = inputbox.value
    var inputbox1 = document.getElementById("num2")
    var number2 = inputbox1.value
    var inputbox2 = document.getElementById("num3")
    var result = inputbox2.value
    var result = parseInt(number1)+parseInt(number2)
    document.getElementById("answer").innerHTML=result
    console.log(result)
}

function subtraction()
{
    var inputbox = document.getElementById("num1")
    var number1 = inputbox.value
    var inputbox1 = document.getElementById("num2")
    var number2 = inputbox1.value
    var inputbox2 = document.getElementById("num3")
    var result = inputbox2.value
    var result = parseInt(number1)-parseInt(number2)
    document.getElementById("answer").innerHTML=result
    console.log(result)
}

function multiplication()
{
    var inputbox = document.getElementById("num1")
    var number1 = inputbox.value
    var inputbox1 = document.getElementById("num2")
    var number2 = inputbox1.value
    var inputbox2 = document.getElementById("num3")
    var result = inputbox2.value
    var result = parseInt(number1)*parseInt(number2)
    document.getElementById("answer").innerHTML=result
    console.log(result)
}

function division()
{
    var inputbox = document.getElementById("num1")
    var number1 = inputbox.value
    var inputbox1 = document.getElementById("num2")
    var number2 = inputbox1.value
    var inputbox2 = document.getElementById("num3")
    var result = inputbox2.value
    var result = parseInt(number1)/parseInt(number2)
    document.getElementById("answer").innerHTML=result
    console.log(result)
}