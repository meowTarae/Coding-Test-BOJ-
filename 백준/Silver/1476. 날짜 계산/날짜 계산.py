import sys

E, S, M = map(int, sys.stdin.readline().split())

e, s, m = 0, 0, 0
result = 0

while True:
    result += 1
    e = (e % 15) + 1
    s = (s % 28) + 1
    m = (m % 19) + 1

    if e == E and s == S and m == M:
        break

print(result)