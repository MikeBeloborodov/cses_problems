/*
You are given an array of n
 integers. You want to modify the array so that it is increasing, i.e., every element is at least as large as the previous element.

On each move, you may increase the value of any element by one. What is the minimum number of moves required?

Input

The first input line contains an integer n
: the size of the array.

Then, the second line contains n
 integers x1,x2,…,xn
: the contents of the array.

Output

Print the minimum number of moves.

Constraints
1≤n≤2⋅105

1≤xi≤109

Example

Input:
5
3 2 5 1 7

Output:
5
*/
export { };
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('', (array_length_input: string) => {
  reader.question('', (user_input: string) => {
    const numbers_arr = user_input.split(' ');
    let answer: number = 0;
    let last_addition: number = 0;
    numbers_arr.forEach((item: string, index: number) => {
      let current_number: number = parseInt(item);
      let next_number: number;
      if (index < numbers_arr.length)
        next_number = parseInt(numbers_arr[index + 1]);
      else
        return
      if (next_number < (current_number + last_addition)) {
        last_addition = (current_number + last_addition) - next_number;
        answer += last_addition;
      } else {
        last_addition = 0;
      }
    });
    console.log(answer);

    reader.close();
  });
});