/*
You are given all numbers between 1,2,…,n
 except one. Your task is to find the missing number.

Input

The first input line contains an integer n
.

The second line contains n−1
 numbers. Each number is distinct and between 1
 and n
 (inclusive).

Output

Print the missing number.

Constraints
2≤n≤2⋅105

Example

Input:
5
2 3 1 5

Output:
4
*/
export { };
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface HashTable {
  [number: number]: boolean
}

reader.question('', (number_input: string) => {
  reader.question('', (numbers_list_input: string) => {
    let hash_table: HashTable = {};
    const number: number = parseInt(number_input);
    const numbers_list: string[] = numbers_list_input.split(' ')
    numbers_list.forEach((item: string) => {
      parseInt(item) in hash_table ? null : hash_table[item] = true;
    });
    for (let i = 1; i <= number; i++) {
      if (!hash_table[i.toString()]) {
        console.log(i);
        break;
      }
    }

    reader.close();
  });
});