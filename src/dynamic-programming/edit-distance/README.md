# edit-distance

reference
- https://www.geeksforgeeks.org/edit-distance-dp-5/


```
Input: str1 = "geek", str2 = "gesek"
Output: 1
We can convert str1 into str2 by inserting a 's'.

Input: str1 = "cat", str2 = "cut"
Output: 1
We can convert str1 into str2 by replacing 'a' with 'u'.

Input: str1 = "sunday", str2 = "saturday"
Output: 3
Last three and first characters are same.  We basically
need to convert "un" to "atur".  This can be done using
below three operations.
Replace 'n' with 'r', insert t, insert a
```

|   |    |   |   |   |   |
|---|----|---|---|---|---|
|   |    | G | E | E | K |
|   |  0 | 1 | 2 | 3 | 4 |
| G |  1 | 0 | 1 | 2 | 3 |
| E |  2 | 1 | 0 | 1 | 2 |
| S |  3 | 2 | 1 | 1 | 2 |
| E |  4 | 3 | 2 | 1 | 3 |
| K |  5 | 4 | 3 | 3 | 1 |

answer: 1

|   |    |   |   |   |   |   |   |
|---|----|---|---|---|---|---|---|
|   |    | S | U | N | D | A | Y |
|   |  0 | 1 | 2 | 3 | 4 | 6 | 7 |
| S |  1 | 0 | 1 | 2 | 3 | 4 | 5 |
| A |  2 | 1 | 2 | 3 | 4 | 3 | 4 |
| T |  3 | 2 | 2 | 3 | 4 | 5 | 6 |
| U |  4 | 3 | 2 | 3 | 4 | 5 | 6 |
| R |  5 | 4 | 3 | 3 | 4 | 5 | 6 |
| D |  6 | 5 | 4 | 4 | 3 | 4 | 5 |
| A |  7 | 6 | 5 | 5 | 4 | 3 | 4 |
| Y |  8 | 7 | 6 | 7 | 5 | 4 | 3 |

answer: 3