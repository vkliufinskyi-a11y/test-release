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
  return number.toString();
}

export function main() {
  numberToString(1);
}

main();
