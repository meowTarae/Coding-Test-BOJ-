function solution(n) {
    const dp = [0,1,2,3,5]
    
    for(let i=5; i<60001; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
    }
    
    return dp[n] % 1000000007;
}