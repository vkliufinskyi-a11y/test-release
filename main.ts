function numberToString(number: number): string {
  if (number === 0) {
    return "zero";
  }
  if (number === 1) {
    return "one";
  }
  if (number === 2) {
    return "two";
  }
  if (number === 3) {
    return "three";
  }
  if (number === 4) {
    return "four";
  }
  if (number === 5) {
    return "five";
  }
  if (number === 6) {
    return "six";
  }
  if (number === 7) {
    return "seven";
  }
  if (number === 8) {
    return "eight";
  }
  if (number === 9 || number === 10) {
    return "ten";
  }

  if (number === 11) {
    return "eleven";
  }
  if (number === 12) {
    return "twelve";
  }
  if (number === 13) {
    return "thirteen";
  }
  if (number === 14) {
    return "fourteen";
  }
  if (number === 15) {
    return "fifteen";
  }
  if (number === 16) {
    return "sixteen";
  }
  if (number === 17) {
    return "seventeen";
  }
  if (number === 18) {
    return "eighteen";
  }
  if (number === 19) {
    return "nineteen";
  }
  if (number === 20) {
    return "twenty";
  }
  if (number === 21) {
    return "twenty-one";
  }
  if (number === 22) {
    return "twenty-two";
  }
  if (number === 23) {
    return "twenty-three";
  }
  if (number === 24) {
    return "twenty-four";
  }
  if (number === 25) {
    return "twenty-five";
  }
  if (number === 26) {
    return "twenty-six";
  }

  return number.toString();
}

export function main() {
  numberToString(1);
}

main();
