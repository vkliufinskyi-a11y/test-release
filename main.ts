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
  return number.toString();
}

export function main() {
  numberToString(1);
}

main();
