// UI Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const input = parseInt($("#user-input").val());
    console.log(input);
    if (input < 3999) {
      const output = romanize(input)
      $("#output").append(`<p>${output}</p>`);
    } else alert("ROMANS HATED THIS NUMBER BECAUSE THEY COULDN\'T COUNT THAT HIGH")

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
  if (numberArray.length === 1) {
    const num = parseInt(numberArray[0]);
    if (num > 0 && num < 4) {
      onesString = ("I").repeat(num);
    } else if (num === 4) {
      onesString = "IV"
    } else if (num === 5) {
      onesString = "V"
    } else if (num > 5 && num < 9) {
      onesString = "V" + ("I").repeat(num - 5);
    } else onesString = "IX"
  }
  console.log(numberArray)
  console.log(onesString)
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
