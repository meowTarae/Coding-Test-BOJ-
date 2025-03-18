function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let result = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left += 1;
    }

    right -= 1;
    result += 1;
  }

  return result;
}