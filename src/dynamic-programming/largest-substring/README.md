# largest-substring

str1 = 'APPLE'
str2 = 'BAPPLE'

|   |    |   |   |    |   |
|---|----|---|---|----|---|
|   |  A | P | P |  L | E |
| B |  0 | 0 | 0 |  0 | 0 |
| A |  1 | 0 | 0 |  0 | 0 |
| P |  0 | 1 | 1 |  0 | 0 |
| P |  0 | 1 | 1 |  0 | 0 |
| L |  0 | 0 | 0 |  1 | 0 |
| E |  0 | 0 | 0 |  0 | 1 |

returns the largest diagonal which is [A, P, P, L, E]
