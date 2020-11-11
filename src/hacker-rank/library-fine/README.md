# library fine
https://www.hackerrank.com/challenges/library-fine/problem

rules

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 * (num of days).
3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 * (num of months).
4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000.

## Sample Input
```
9 6 2015
6 6 2015
```

## Sample Output
```
45
```