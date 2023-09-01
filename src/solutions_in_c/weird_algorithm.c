#include <stdio.h>
#include <string.h>
#include <math.h>

// sprintf(destination_string, "%d", number);
// strcat(str_1, str_2) -> it will copy everything to str_1

int main() {

  long long int number;
  char answer[(int)pow(10, 6)];
  char string_buffer[(int)pow(10, 6)];

  scanf("%lld", &number);
  sprintf(answer, "%lld", number);
  while (number > 1) {
    if (number % 2 == 0) {
      number = number / 2;
      sprintf(string_buffer, " %lld", number);
      strcat(answer, string_buffer);
    } else {
      number = (number * 3) + 1;
      sprintf(string_buffer, " %lld", number);
      strcat(answer, string_buffer);
    }
  }
  printf("%s", answer);

  return 0;
}