const solution = (brown, yellow) => {
    const total = brown + yellow;
    const arr = [];
    
    for(let i=3; i<=Math.sqrt(total); i++) {
        if(total % i === 0) 
            arr.push([i, total/i])
    }
    
    for(const [a, b] of arr) {
        if ((a-2) * (b-2) === yellow)
            return [b, a]
    }
}