function solution(people, limit) {
  let cnt = 0;
  people.sort((a,b)=>a-b);
  while(people.length > 0){
      if (people.length === 1){
          cnt++;
          break;
      }
          
      if(people.at(-1) + people.at(0) <= limit){
          people.shift();
      }
      people.pop();
      cnt++;
  }
  return cnt;
}