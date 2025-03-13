function solution(topping) {
    const left = new Set();
    const right = {};
    topping.forEach(v => right[v] ? (right[v]+=1) : right[v] = 1);
    let leftSize = 0;
    let rightSize = Object.keys(right).length;
    let result = 0;
    
    for(const element of topping) {
        left.add(element);
        leftSize = left.size;
        right[element]-=1;
        
        if(right[element] === 0) {
            delete right[element] 
            rightSize-=1;
        }
        
        if(leftSize === rightSize) result++;
    }
    
    return result
}