// 1stage : 1/8, 0.125
// 2stage : 3/7, 0.42
// 3stage : 2/4, 0.5
// 4stage : 1/2, 0.5
// 5stage : 0/1, 0
const solution = (N, stages) => {
    const arr = [];
    
    for(let i = 1; i<=N; i++) {
        let a = 0;
        let b = 0;
        
        for(let j = 0; j<stages.length; j++) {
            if(i > stages[j]) continue;
            
            if (i === stages[j]) a += 1;
            b += 1;
        }
        
        arr.push({stage: i, value: a/b})
    }
    
    return (arr.sort((a,b)=>b.value-a.value).map(v=>v.stage))
}
