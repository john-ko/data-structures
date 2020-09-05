# knapsack 01 problem

https://www.youtube.com/watch?v=xCbYmUPvc2Q

given:
max-weight: `5`
```
[
  { value: 60, weight: 5 },
  { value: 50, weight: 3 },
  { value: 70, weight: 4 },
  { value: 30, weight: 2 },
]
```

answer: 80

|          |   |    |    |    |    |
|----------|---|----|----|----|----|
|          | 1 | 2  | 3  | 4  | 5  |
| v:60 w:5 | 0 | 0  | 0  | 0  | 60 |
| v:50 w:3 | 0 | 0  | 50 | 50 | 60 |
| v:70 w:4 | 0 | 0  | 50 | 70 | 70 |
| v:30 w:2 | 0 | 30 | 50 | 70 | 80 |


```
     w4   w5   ... wn
   |----|-----|----|
p  | p4 | p5  | pn |
   |----|-----|----|
i  | 0  | [t] | .. |
   |----|-----|----|
```

```js
t = max(p5, p(5 - i.w) + i.v)
```
