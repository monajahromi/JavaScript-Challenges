Create a function which takes a string txt and expands it as per following rules:

1-The numeric values represent the occurrence of each letter preceding that numeric value.

```
stringExpansion("3M2o5n1a") ➞ "MMMMMoonnnnna"
```
2-The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.

```
stringExpansion("3Mona")➞ "MMMona"           // correct
stringExpansion("3Mona") ➞ "MMMona"          // wrong
stringExpansion("3Mat") ➞ "MonaMonaMona"     // wrong
```

3-If there are consecutive numeric characters, ignore them all except last one.

```
stringExpansion("3M123o42n12a") ➞ "MMMooonnaa"
```

4-If there are two consecutive alphabetic characters then the string will remain unchanged.

```
stringExpansion("airforce") ➞ "airforce"
```

5-Empty strings should return an empty string.

```
stringExpansion("") ➞ ""
```
