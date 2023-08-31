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