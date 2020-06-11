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
    const num1 = parseInt(numberArray[0]);
    const num2 = parseInt(numberArray[1]);
    tensString = tens(num1);
    onesString = ones(num2)
    return tensString + onesString
  } else if (numberArray.length === 3) {
    const num1 = parseInt(numberArray[0]);
    const num2 = parseInt(numberArray[1]);
    const num3 = parseInt(numberArray[2]);
    hundredsString = hundreds(num1);
    tensString = tens(num2);
    onesString = ones(num3)
    return hundredsString + tensString + onesString
  } else {
    const num1 = parseInt(numberArray[0]);
    const num2 = parseInt(numberArray[1]);
    const num3 = parseInt(numberArray[2]);
    const num4 = parseInt(numberArray[3]);
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
  if (num === 0) {
    return "";
  } else if (num > 0 && num < 4) {
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
  if (num === 0) {
    return "";
  } else if (num > 0 && num < 4) {
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