/*
A permutation of integers 1,2,…,n
 is called beautiful if there are no adjacent elements whose difference is 1
.

Given n
, construct a beautiful permutation if such a permutation exists.

Input

The only input line contains an integer n
.

Output

Print a beautiful permutation of integers 1,2,…,n
. If there are several solutions, you may print any of them. If there are no solutions, print "NO SOLUTION".

Constraints
1≤n≤106

Example 1

Input:
5

Output:
4 2 5 3 1

Example 2

Input:
3

Output:
NO SOLUTION
*/
export { };

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('', (user_input: string) => {
  const number: number = parseInt(user_input);
  if (number === 3 || number === 2) {
    console.log("NO SOLUTION"); 
    reader.close()
    return
  }
  if (number === 1) {
    console.log("1");
    reader.close()
    return
  }
  let answer: string = "2";
  for (let i = 4; i <= number; i += 2) {
    answer += " " + i.toString();
  }
  for (let i = 1; i <= number; i += 2) {
    answer += " " + i.toString();
  }

  console.log(answer);

  reader.close();
})