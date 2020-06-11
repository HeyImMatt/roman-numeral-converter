// UI Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const input = parseInt($("#user-input").val());
    console.log(input);
    if (input > 0 && input < 3999) {
      const output = romanize(input)
      $("#output").append(`<p>${output}</p>`);
    } else alert("ROMANS HATED THIS NUMBER BECAUSE THEY COULDN\'T COUNT THAT HIGH OR THAT LOW")

  });
});

//Biz Logic

function changeIntoRN(number) {
  if (number === 1) {
   return "I"
  } else if (number === 5){
   return "V"
  } else if (number === 10){
   return "X"
  } else if (number === 50){
   return "L"
  } else if (number === 100){
   return "C"
  } else if (number === 500){
   return "D"
  } else return "M"
  console.log(number);
}

function romanize(number) {
  const numberArray = number.toString().split('')
  let onesString;
  let tensString;
  let hundredsString;
  let thousandsString;
  if (numberArray.length === 1) {
    const num = parseInt(numberArray[0]);
    onesString = ones(num);
    return onesString
  } else if (numberArray.length === 2) {
    const num1 = parseInt(numberArray[1]);
    const num2 = parseInt(numberArray[0]);
    onesString = ones(num1)
    tensString = tens(num2);
    return tensString + onesString
  } else if (numberArray.length === 3) {
    const num1 = parseInt(numberArray[2]);
    const num2 = parseInt(numberArray[1]);
    const num3 = parseInt(numberArray[0]);
    hundredsString = hundreds(num1);
    tensString = tens(num2);
    onesString = ones(num3)
    return hundredsString + tensString + onesString
  } else {
    const num1 = parseInt(numberArray[3]);
    const num2 = parseInt(numberArray[2]);
    const num3 = parseInt(numberArray[1]);
    const num4 = parseInt(numberArray[0]);
    thousandsString = hundreds(num1);
    hundredsString = hundreds(num2);
    tensString = tens(num3);
    onesString = ones(num4)
    return thousandsString + hundredsString + tensString + onesString
  }
  
}

function ones(num) {
  if (num === 0) {
    return "";
  } else if (num > 0 && num < 4) {
   return ("I").repeat(num);
  } else if (num === 4) {
   return "IV"
  } else if (num === 5) {
   return "V"
  } else if (num > 5 && num < 9) {
   return "V" + ("I").repeat(num - 5);
  } else return "IX"
}

function tens(num) {
  if (num > 0 && num < 4) {
   return ("X").repeat(num);
  } else if (num === 4) {
   return "XL"
  } else if (num === 5) {
   return "L"
  } else if (num > 5 && num < 9) {
   return "L" + ("X").repeat(num - 5);
  } else return "XC"
}

function hundreds(num) {
  if (num > 0 && num < 4) {
   return ("C").repeat(num);
  } else if (num === 4) {
   return "CD"
  } else if (num === 5) {
   return "D"
  } else if (num > 5 && num < 9) {
   return "D" + ("C").repeat(num - 5);
  } else return "CM"
}

function thousands(num) {
   return ("M").repeat(num);
}

/*

3. get the length of the array 1, 2, 3, 4
if it's 1 send the number into the ones logic
if it's 2 then send the number at [0] into the tens logic, and the [1] into the ones logic
join up the strings into one in order of greatest to smallest 
 [0]   [1]  [2]
["3", "3", "3"]
[I, V, X, L, C, D, M]

Ones:
between 1 and 3, num * I
4 = IV
5 = V
greater than 5, less than 9: V and I times difference between num and 8
9 = IX

3 3 3
CCCXXXIII

Tens:
between 1 and 3, num * X
4 = XL
5 = L
greater than 5, less than 9: L and X times difference between num and 8
9 = XC

Hundreds:
between 1 and 3, num * C
4 = CD
5 = D
greater than 5, less than 9: D and C times difference between num and 8
9 = CM

3 III
4 IV
5 V
8 VIII
9 IX
10 X
15 XV
245 CCVL
2356 MMCCCLVI
*/
