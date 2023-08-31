/*
You are given a DNA sequence: a string consisting of characters A, C, G, and T. Your task is to find the longest repetition in the sequence. This is a maximum-length substring containing only one type of character.

Input

The only input line contains a string of n
 characters.

Output

Print one integer: the length of the longest repetition.

Constraints
1≤n≤106

Example

Input:
ATTCGGGA

Output:
3
*/
export { };
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('', (dna_sequence: string) => {

  let current_char: string = dna_sequence[0];
  let max_seq: number = 0;
  let current_seq: number = 0;
  const dna_sequence_arr = dna_sequence.split('');
  dna_sequence_arr.forEach((letter: string) => {
    if (letter == current_char)
      current_seq++;
    else {
      max_seq < current_seq ? max_seq = current_seq : null;
      current_char = letter;
      current_seq = 1;
    }
  })
  max_seq < current_seq ? console.log(current_seq) : console.log(max_seq);

  reader.close()
});