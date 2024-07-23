import sys

n,k = map(int,sys.stdin.readline().split())
lst = [int(sys.stdin.readline()) for i in range(n)]

dp = [0 for i in range(k+1)]

dp[0] = 1

for i in lst :
    for j in range(i,k+1) :
        if j - i >= 0 :
            dp[j] += dp[j-i]

print(dp[j])