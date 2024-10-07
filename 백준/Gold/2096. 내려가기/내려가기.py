import sys
input = sys.stdin.readline

n = int(input())
max1, max2, max3 = map(int, input().split())
min1, min2, min3 = max1, max2, max3

for _ in range(n - 1):
    a, b, c = map(int, input().split())
    pMax1, pMax2, pMax3, pMin1, pMin2, pMin3 = max1, max2, max3, min1, min2, min3
    max1 = a + max(pMax1, pMax2)
    max2 = b + max(pMax1, pMax2, pMax3)
    max3 = c + max(pMax2, pMax3)
    min1 = a + min(pMin1, pMin2)
    min2 = b + min(pMin1, pMin2, pMin3)
    min3 = c + min(pMin2, pMin3)

print(max(max1, max2, max3), min(min1, min2, min3))