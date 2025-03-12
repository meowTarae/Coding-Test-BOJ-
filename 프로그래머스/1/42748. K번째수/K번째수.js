function solution(array, commands) {
    const arr = [];
    
    for (const [i, j, k] of commands) {
        arr.push(array.slice(i - 1, j).sort((a,b)=>a-b)[k - 1]);
    }
    
    return arr;
}