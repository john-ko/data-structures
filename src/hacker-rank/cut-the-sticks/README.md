# cut the sticks
https://www.hackerrank.com/challenges/cut-the-sticks/problem
You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

## examples
### Sample Input 0
```
6
5 4 4 2 2 8
```

### Sample Output 0
```
6
4
2
1
```