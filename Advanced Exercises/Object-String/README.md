## Project

### String

1. Write a JavaScript function to truncate a string to a certain number of words.

```js
console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
```

2. Write a JavaScript function to alphabetize a given string.

- Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.

```js
console.log(alphabetize_string("United States"));
//"SUadeeinsttt"
```

3. Write a JavaScript function to convert ASCII to Hexadecimal format.

```js
console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030
```

4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r

```js
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"
```

5. Write a JavaScript function to get the successor of a string.

`Note`: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.

```js
string.successor("abcd"); // "abce"
string.successor("THX1138"); // "THX1139"
string.successor("< >"); // "< >"
string.successor("1999zzz"); // "2000aaa"
string.successor("ZZZ9999"); // "AAAA0000"
```

### Object

6. Write a JavaScript function to sort the following array of objects by title value.

```js
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
//sorted
/*/* {
  author: "Suzanne Collins",
  libraryID: 3245,
  title:"Mockingjay:The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]*/
```

7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

```js
console.log(num_string_range("a", "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
```

8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second.

```js
"14:37:42";
"14:37:43";
"14:37:44";
"14:37:45";
"14:37:46";
"14:37:47";

```

9. Write a JavaScript function to print all the methods in an JavaScript object.

```js
console.log(all_properties(Array));
["isArray", "from", "of"]
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]

```

10. Write a JavaScript function to print all the properties in an JavaScript object.

```js
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties(Array));
["length", "name", "prototype", "isArray", "from", "of"]
```
