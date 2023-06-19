const multiplicationTable = (listNumbers: number[]): string => {
  let table: string = "";
  for (let index = 0; index <= listNumbers.length - 1; index++) {
    let number: number = listNumbers[index];
    for (let index = 0; index <= 10; index++) {
      table += `${number} x ${index} = ${number * index}\n`;
    }
    table += "--------------\n\n";
  }
  return table;
};

console.log(multiplicationTable([1, 9, 5, 7]));
