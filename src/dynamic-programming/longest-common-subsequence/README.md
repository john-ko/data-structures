# longest-common-subsequence
given `AAB` and `AZB`

|   |   |   |   |
|---|---|---|---|
|   | A | A | B |
| A | 1 | 1 | 1 |
| Z | 1 | 1 | 1 |
| B | 1 | 1 | 2 |

```
         L1
   |---|---|
   | x | y |
   |---|---|
L2 | z | t |
   |---|---|
```

```js
if (L1 === L2)
  return 1 + x

return max(z, y)
```
