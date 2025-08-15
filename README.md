# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 10.01 Array.map Method

## 📖 Overview
The `map()` method creates a **new array** by calling a provided callback function on every element of the original array. It is commonly used for **transforming data**.

---

## 🧠 Step 1: Theoretical Exploration

### Syntax
```javascript
const newArray = array.map(function(element, index, array) {
  return transformedValue;
});
```
- **element** → Current element being processed.
- **index** (optional) → Index of the current element.
- **array** (optional) → The original array.

### Key Characteristics
- Returns a **new array** with the same length as the original.
- Does **not** mutate the original array.
- The return value from the callback becomes the corresponding element in the new array.

### Example
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]
```

---

## 🧪 Step 2: Inquiry & Application

1. **Concept Check**  
   - `map()` returns a new array containing transformed elements, while `forEach()` returns `undefined`.

2. **Transformation Awareness**  
   - If the callback doesn’t return a value, the new array will contain `undefined`.

3. **Consistency Check**  
   - The new array always has the same length as the original.

4. **Object Mutation**  
   - `map()` does not prevent mutations to objects inside the array.

5. **Debugging Insight**
```javascript
const nums = [1, 2, 3];
const result = nums.map(num => {
  num * 2; // Missing return
});
console.log(result); // [undefined, undefined, undefined]
```

**Real-World Simulation Task:**  
Given an array of students with scores, use `map()` to create a new array with each student's name and corresponding grade (A, B, C, D).

---

## 📝 Step 3: Assessment & Feedback

**Quick Quiz**
1. B — Returns a new array containing transformed elements.  
2. B — Does not mutate the original array.  
3. A — Always returns an array of the same length.  
4. A — `[2, 4, 6]`.  
5. B — `undefined` for each element if no return.

---

## 🪞 Step 4: Reflection & Journal

1. **Most intuitive part:** That `map()` creates a new array containing transformed elements.  
2. **Least intuitive part:** Understanding that it returns `undefined` if no explicit return is provided.  
3. **Real-world use case:** Using `map()` in NLP to bind commands to keywords for quick lookup.  
4. **Beginner explanation:**  
   "`map()` takes each element of an array, transforms it with a callback, and returns a new array with those transformed values. It does not change the original array."

---

## 🧩 Step 5: Exercises

**1. Doubling Numbers**
```javascript
const numbers = [2, 4, 6];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
```

**2. Uppercase Words**
```javascript
const words = ['apple', 'banana', 'cherry'];
const uppercase = words.map(word => word.toUpperCase());
console.log(uppercase);
```

**3. Name Lengths**
```javascript
const names = ['Alice', 'Bob', 'Charlie'];
const length = names.map(name => ({
    name: name,
    length: name.length
}));
console.log(length);
```

**4. Price Conversion**
```javascript
const pricesUSD = [10, 20, 30];
const exchangeRate = 0.9;
const priceEUR = pricesUSD.map(price => price * exchangeRate);
console.log(priceEUR.map(p => `€${p.toFixed(2)}`).join(', '));
```

**5. Extracting Property Values**
```javascript
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];
const productNames = products.map(product => product.name);
console.log(productNames);
```

---

## 🎫 Step 7: Exit Ticket Questions

1. **What does `map()` return after it executes its callback on every element?**  
   → A new array containing the values returned by the callback.

2. **Does `map()` modify the original array? Why or why not?**  
   → No, because it returns a new array without changing the original.

3. **If the callback in `map()` does not explicitly return a value, what will the resulting array contain?**  
   → `undefined` for each element.

4. **Why is `map()` more suitable than `forEach()` when transforming data?**  
   → Because `map()` returns a new array, while `forEach()` does not.

5. **One real-world example where `map()` is best:**  
   → Converting a list of email addresses into an array of user objects with default roles.

---

## 📚 References
- [MDN Web Docs: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS)
