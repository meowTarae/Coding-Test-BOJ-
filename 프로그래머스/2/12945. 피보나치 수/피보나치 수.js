const solution = (n) => {
    const dp = [0,1,1,2,3,5];
    
    for(let i=6; i<100001; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    
    return dp[n] % 1234567;
}