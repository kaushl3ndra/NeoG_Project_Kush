// ex07: function to add two numbers

// function functionName(parameterOne, parameterTwo) {
//     // processing
//     return outputValue;
//   }



function add(num1, num2) {
    console.log("valueone: " + num1, ",", "valuetwo: " + num2);
    var sum = (num1 + num2);
    return sum;
}

// function call(functionName)
var result = add(8, 4)
console.log("The sum of the two numbers is " + result)