function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false)
    let maxCount = 0;
    
    const dfs = (health, count) => {
        maxCount = Math.max(maxCount, count); 
        
        for(let i=0; i<dungeons.length; i++) {
            if(visited[i]) continue;
            if(dungeons[i][0] > health) continue;
                
            visited[i] = true;
            dfs(health-dungeons[i][1], count+1)
            visited[i] = false;
        }
    }

    dfs(k, 0)
    
    return maxCount
}