function numberToString(number: number): string {
  if (number === 0) {
    return "zero";
  }

  return number.toString();
}

export function main() {
  numberToString(1);
}

main();
