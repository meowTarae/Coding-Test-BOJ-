const solution =(n,words)=> {
    const arr = [];
    const wordsLen = words.length;
    
    const 규칙위반 = (idx) => {
        return [(idx % n) + 1, ~~(idx / n)+1]
    }
    
    for(let i=0; i<wordsLen; i++) {
        const word = words[i];
        
        if(i===0) {
            arr.push(word);
            continue;
        }
        
        // 3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
        if(word[0] !== arr[arr.length-1].at(-1)) 
            return 규칙위반(i);
        
        // 4. 이전에 등장했던 단어는 사용할 수 없다.
        if(arr.indexOf(word) !== -1) 
            return 규칙위반(i);
        
        // 5. 한 글자인 단어는 인정되지 않습니다.
        if(word.length === 1) 
            return 규칙위반(i);
        
        arr.push(word);
    }
    
    return [0, 0]
}