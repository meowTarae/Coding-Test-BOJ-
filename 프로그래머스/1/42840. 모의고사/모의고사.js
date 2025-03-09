const solution = (answers) => {
    const n1 = [1,2,3,4,5];
    const n2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const func = (arr) => {
        return answers.filter((v,i)=> v === arr[i % arr.length]).length;
    }
    
    const arr = [func(n1), func(n2),func(n3)]
    
    return (arr.map((v,i)=>v === Math.max(...arr) ? i+1 : '').filter(v=>v!==''))
}