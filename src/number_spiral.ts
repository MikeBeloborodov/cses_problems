/*
A number spiral is an infinite grid whose upper-left square has number 1. Here are the first five layers of the spiral:

https://cses.fi/file/bba36f2601b99c7edc15865aa2a49e680a271075f30e86aa0e4e18d00a779c21

Your task is to find out the number in row y
 and column x
.

Input

The first input line contains an integer t
: the number of tests.

After this, there are t
 lines, each containing integers y
 and x
.

Output

For each test, print the number in row y
 and column x
.

Constraints
1≤t≤105

1≤y,x≤109

Example

Input:
3
2 3
1 1
4 2

Output:
8
1
15
*/
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const get_user_input = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    reader.question('', (user_input: string) => {
      resolve(user_input);
    });
  });
}

const main = async () => {
  let tests_array: string[] = [];
  let answer: string = "";
  const number_of_tests: number = parseInt(await get_user_input());
  console.log(number_of_tests);
  for (let i = 0; i < number_of_tests; i++) {
    console.log(i);
    tests_array.push(await get_user_input());
    console.log(tests_array[i]);
  }
  tests_array.forEach((test: string) => {
    const row: number = parseInt(test.split(' ')[0]);
    const column: number = parseInt(test.split(' ')[1]);
    console.log("row and col");
    console.log(row);
    console.log(column);
    console.log("-----------");
    if (row >= column) {
      const square: number = row * row;
      if (row % 2 == 0) {
        let calculation = square - column + 1;
        console.log(calculation.toString());
      } else {
        let calculation = square - row + 1 - (row - column);
        console.log(calculation.toString());
      }
    } else {
      const square: number = column * column;
      if (column % 2 == 0) {
        let calculation = square - (column - row) + 1;
        console.log(calculation.toString());
      } else {
        let calculation = square - (column - row);
        console.log(calculation.toString());
      }
    }
  })

  reader.close();
}

main();