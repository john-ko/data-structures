# transform

## transform.ts

```
given [
  'a',
  'b',
  'b',
  'b',
  'c',
  'a',
  'a',
  'b'
]
```
i want the results to be grouped by like items, example

```
[
  ['a'],
  ['b', 'b', 'b'],
  ['c'],
  ['a', 'a'],
  ['b']
]
```

## trasnform1.ts
slightly different than 1st transform
```
given [
  'a',
  'b',
  'b',
  'b',
  'c',
  'a',
  'a',
  'b'
]
```
i want the results to be grouped by like items, example

```
[
  'a',
  ['b', 'b', 'b'],
  'c',
  ['a', 'a'],
  'b'
]
```