const solution = (numbers) => {
    const length = numbers.length;
    const set = new Set();
    
    for(let i=0; i<length-1; i++) {
        for(let j=i+1; j<length; j++) {
            set.add(numbers[i] + numbers[j]);
        }    
    }
    
    return [...set].sort((a,b)=>a-b);
}