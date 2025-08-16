//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 10.01 Array.map Method


//TODO 🔍  Step 1: Theoretical Exploration

//* 1. 📘 What Is map()?
//  The map() method creates a new array by calling a provided callback function on every element of the original array.

//  Syntax:

// const newArray = array.map(function(element, index, array) {
//     return transformedValue;
// });

//  • element → The current element being processed.
//  • index (optional) → The index of the current element.
//  • array (optional) → The original array.

//* 2. 🧠 How It Works
//  • Iterates through each element of the array in order.
//  • Executes the callback on each element.
//  • The return value of the callback becomes the element in the new array.
//  • Always returns a new array with the same length as the original.
//  • Does not mutate the original array (unless elements are objects and are mutated inside the callback).

//* 3. 🛠 Example

const numbers1 = [1, 2, 3];
const doubled1 = numbers.map(num => num * 2);

console.log(doubled1); // [2, 4, 6]
console.log(numbers1); // [1, 2, 3]

//* 4. ⚠️ Important Considerations
//  • Always returns a new array with the same number of elements.
//  • Use when you need to transform data.
//  • If you want to filter out elements, use `.filter()` instead.
//  • If you want to perform an action without creating a new array, use `.forEach()`.

//* 5. ✅ When to Use map()
//  • Converting raw data into a different format.
//  • Extracting certain properties from an array of objects.
//  • Applying a calculation to each element of an array.

//* 6. ⛔ When Not to Use It
//  • When you do not need a returned array.
//  • When you need fewer elements in the result — use `filter()` for that.
//  • When you just want to loop through for side effects — use `forEach()`.


//TODO  🧪 Step 2: Inquiry & Application

//* 🧭 Guided Inquiry

//? 1. Concept Check
//  • What is the main difference between `map()` and `forEach()` in terms of return value and purpose?
//! Answer: The main difference between `map()` and `forEach()` can be seen if I want to perform an action without creating a new array.

//  ‼️ Feedback: You’ve got part of the idea, but the key distinction needs to be sharper.
//  A more complete answer would be:
//  • The main difference is that map() returns a new array containing the transformed results of each element, while forEach() returns undefined and is used only to perform actions (side effects) on each element without creating a new array.

//? 2. Transformation Awareness
//  • If the callback in `map()` does not have a return statement, what will the new array contain?
//! Answer: If the callback in `map()` does not have a return statement the new array will contain only undefined. 

//  ‼️ Feedback: ✅ Exactly — map() always creates a new array with the same length as the original, so if your callback doesn’t explicitly return a value, each slot in the new array will be undefined.

//? 3. Consistency Check
//  • Will the new array returned by `map()` always have the same length as the original array? Why or why not?
//! Answer: Always returns a new array with the same length as the original because does not mutate the original array.

//  ‼️ Feedback: You’re close ✅ — but the reason isn’t about mutation.
//  Here’s a refined answer:
//  • map() always returns a new array with the same length as the original because it executes the callback once for each element and places the returned value in the corresponding position of the new array. It doesn’t skip elements — even if the return value is undefined.

//? 4. Object Mutation
//  • Does `map()` protect against changes to objects inside the array? Why or why not?
//! Answer: The `map()` method does not mutate the original array (unless elements are objects and are mutated inside the callback).

//  ‼️ Feedback: ✅ Correct — that’s exactly right.
//  To expand:
//  • map() itself doesn’t change the original array.
//  • But if the array contains objects, and your callback modifies those objects’ properties, both the original and new arrays will reflect those changes — because they still reference the same objects in memory.

//? 5. Debugging Insight
//  • Given:

const nums = [1, 2, 3];
const result = nums.map(num => {
    num * 2;
});

console.log(result);

//? What will be logged, and why?
//! Answer: The given code will log undefined because `return` is missing from the code right before "num * 2;".

//  ‼️ Feedback: ✅ Exactly — without the return, the callback implicitly returns undefined for each element, so map() builds an array full of undefined.

//* ⚙️ Real-World Simulation Task

//? Scenario:
//  You are building a student grade processing feature.

const students = [
    { name: 'Alice', score: 80 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 }
];

//? Your Task:
//  Write a getGrades(students) function that:
//  1. Uses map() to create a new array of objects.
//  2. Each object should have the student’s name and a grade property:
//  • Score >= 90 → "A"
//  • Score >= 80 and < 90 → "B"
//  • Score >= 70 and < 80 → "C"
//  • Score < 70 → "D"
//  3. Returns the new array and logs it.

//! Solution

function getGrades(students) {
    return students.map(student => {
        let grade;
        if (student.score >= 90) {
            grade = "A";
        } else if (student.score >= 80) {
            grade = "B";
        } else if (student.score >= 70) {
            grade = "C";
        } else {
            grade = "D";
        }
        return { name: student.name, grade: grade };
    });
}

console.log(getGrades(students));

//! Expected output:

[
    { name: 'Alice', grade: 'B' },
    { name: 'Bob', grade: 'A' },
    { name: 'Charlie', grade: 'D' }
]

//* Here’s why map() is the ideal method for the student grade processing task:

//? 1. Purpose of the task → Transformation
//  • You start with an array of students with scores.
//  • You want a new array of students with grades.
//  • This is exactly what map() is for — transforming each element into a new value.

//? 2. Why not forEach()?
//  • forEach() is for side effects (like logging to the console, updating the DOM, etc.).
//  • It does not return a new array.
//  • If you used forEach(), you’d have to manually push new objects into another array, which is extra work.

//? 3. Why not filter()?
//  • filter() is for selecting elements based on a condition.
//  • It may reduce the length of the array and does not transform the elements themselves.
//  • You’re not removing any students here — you’re keeping them all and changing their structure.

//? 4. Why map() is perfect here
//  • It iterates over every student.
//  • It returns a new array with the same number of elements.
//  • Each element is transformed into an object containing name and grade.


//TODO  ✅ Step 3: Assessment & Feedback

//* 🎯 Quick Quiz (5 Questions)

//? 1. What does `map()` return after it executes its callback on every element?

//  A. `undefined`
//  B. A new array containing transformed elements
//  C. The modified original array
//  D. The number of transformed elements

//! Answer: B

//? 2. Does `map()` mutate the original array?

//  A. Yes
//  B. No

//! Answer: B

//? 3. Which of the following is **true** about `map()`?

//  A. It always returns an array with the same length as the original.
//  B. It can remove elements from the array if the callback returns `false`.
//  C. It stops early when the condition is met.
//  D. It returns `undefined` if no elements match the condition.

//! Answer: A

//? 4. What will be logged?

const numbers2 = [1, 2, 3];
const doubled2 = numbers2.map(num => num * 2);
console.log(doubled2);

//  A. `[2, 4, 6]`
//  B. `[1, 2, 3]`
//  C. `undefined`
//  D. `[NaN, NaN, NaN]`

//! Answer: A

//? 5. If your callback in `map()` does not have a `return` statement (and you use curly braces), what will the resulting array contain?

//  A. The same elements as the original
//  B. `undefined` for each element
//  C. Only elements that match a condition
//  D. An empty array

//! Answer: B

//  ‼️ Answer Review:

//? 1. B — A new array containing transformed elements ✅
//  map() builds a brand-new array based on the return values of the callback.

//? 2. B — No ✅
//  map() does not mutate the original array (unless the elements themselves are objects and you modify their properties inside the callback).

//? 3. A — It always returns an array with the same length as the original ✅
//  Even if you return undefined for some elements, the new array will have the same number of slots.

//? 4. A — [2, 4, 6] ✅
//  Each number is doubled and returned, so map() produces a new transformed array.

//? 5. B — undefined for each element ✅
//  Without a return in the callback, the default return value is undefined.


//TODO  🪞 Step 4: Reflection & Journal — `Array.map()`

//* Answer these prompts in your own words to strengthen your understanding.

//? 1. What part of the `map()` method felt most intuitive to you?**
//  (Example: That it always returns a new array with the same length as the original.)*

//! Answer: The most intuitive part felt that `map()` creates a new array containing transformed elements.

//  ‼️ Feedback: ✅ Exactly — that’s the core intuition for map(): it’s designed for transformation, not filtering or side effects.

//? 2. What part was least intuitive or required more effort to understand?**
//  (Example: Remembering to include a `return` when using curly braces in the callback.)*

//! Answer: The least intuitive part felt where it returns undefined if no elements match the condition.

//  ‼️ Feedback: I see what you mean 👍 — though with map() specifically, it’s not about elements “matching a condition” like in filter().
//  Instead, map() will return undefined if the callback doesn’t explicitly return a value (especially when using curly braces). That’s the part that often catches people off guard.

//? 3. Can you think of a real or hypothetical scenario where `map()` would be the most appropriate choice over other array methods?**
//  (Example: Converting an array of prices from dollars to euros.)*

//! Answer: The `map()` method can be used to create a data structure mapping keys to values, during natural language processing, where different commands can be bound to keywords, which then can be directly accessed through these keywords. In contrast, an array is only a container with an index for its content. If we want to access the content of the array, we either need to specify the index or run conditional comparisons to find our query.

//  ‼️ Feedback: That’s a very thoughtful and advanced example ✅ — you’re essentially describing using map() to transform raw text input into a structured key-value representation for faster lookup, which is perfect in natural language processing or command parsing.
//  This highlights map()’s strength: taking unstructured or semi-structured data and turning it into a format that’s optimized for the task at hand.

//? 4. If you were explaining `map()` to a beginner in 2–3 sentences, how would you describe it?**
//  (Example: "`map()` takes each element in an array, transforms it using a function you write, and returns a new array with the transformed values. It never changes the original array.")*

//! Answer: In JavaScript, the `map()` method is used on arrays to create a new array by applying a function to each element of the original array. It doesn’t change the original array — instead, it returns the transformed values in a new one.

//  ‼️ Feedback: ✅ Perfect — that’s a clear, concise, and beginner-friendly definition of map().

//  You have now completed Step 4: Reflection & Journal for map() with:
//  • A solid grasp of its purpose (transformation).
//  • Awareness of pitfalls (returning undefined if no explicit return).
//  • A real-world application that’s advanced and practical.
//  • The ability to explain it clearly to beginners.


//TODO  🧩 Step 5: Exercises — `Array.map()` Method

//* These will go from simple to slightly more challenging so you can build confidence and mastery.

//? Exercise 1: Doubling Numbers

const numbers3 = [2, 4, 6];

// Use map() to create a new array with each number doubled.

//! Solution 1

const doubled3 = numbers3.map(num => num * 2); console.log(doubled3);

//  ‼️ Feedback: ✅ Correct — your Solution 1 is exactly how to use map() for doubling numbers.

//  Why it works:
//  • num * 2 transforms each element.
//  • map() returns a new array with the transformed values.

//? Exercise 2: Uppercase Words

const words = ['apple', 'banana', 'cherry'];

// Use map() to create a new array with all words in uppercase.

//! Solution 2

const uppercase = words.map(word => word.toUpperCase()); console.log(uppercase);

//  ‼️ Feedback: ✅ Perfect — your Solution 2 is spot on for converting words to uppercase.

//  Why it works:
//  • word.toUpperCase() transforms each string into uppercase.
//  • map() returns a new array with the transformed strings.

//? Exercise 3: Name Lengths

const names = ['Alice', 'Bob', 'Charlie'];

// Use map() to create a new array of objects like:
// { name: 'Alice', length: 5 }

//! Solution 3

const length = names.map(name => ({ name: name, length: name.length })); console.log(length);

//  ‼️ Feedback: ✅ Excellent — your Solution 3 is both correct and well-structured.

//  Why it works:
//  • { name: name, length: name.length } creates a new object for each name.
//  • Using parentheses () around the object literal ensures it’s returned correctly from the arrow function.
//  • map() returns a new array of these objects.

//? Exercise 4: Price Conversion

const pricesUSD = [10, 20, 30];
const exchangeRate = 0.9; // USD to EUR

// Use map() to convert prices to EUR.

//! Solution 4

const priceEUR = pricesUSD.map(price => price * exchangeRate);
console.log(priceEUR.map(p => €${p.toFixed(2)}).join(', '));

//  ‼️ Feedback: ✅ Nicely done — your Solution 4 not only converts the prices but also formats them neatly.

//  Why it works:
//  • price * exchangeRate converts each USD price to EUR.
//  • .map(p => \€${p.toFixed(2)}`)` formats each number to two decimal places with a euro sign.
//  • .join(', ') combines them into a single comma-separated string for display.

//? Exercise 5: Extracting Property Values**

const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 }
];

// Use map() to create an array of just the product names.

//! Solution 5

const names2 = products.map(product => name: ${product.name}).join(', '); console.log(names2);

//  ‼️ Feedback: Your Solution 5 works in terms of output, but it’s slightly different from the original task’s intent.

//* 🔍 What you did:
//  • You mapped products into formatted strings like "name: Laptop".
//  • Then you used .join(', ') to combine them into one string.

//  ✅ Original exercise goal:
//  • Create a new array of just the product names — no joining required (that could be done later if needed).

//* 💡 Recommended approach:

const productNames = products.map(product => product.name);
console.log(productNames);

//! Here’s your quick summary review for the map() exercises:

//* ✅ What you did well
//  • Correct syntax: Every .map() call was valid and returned the expected results.
//  • Data transformation: You used map() exactly for what it’s meant — transforming data.
//  • Extra formatting: In the price conversion exercise, you went a step further by formatting the results neatly.
//  • Object mapping: Your name-length exercise showed that you understand mapping to new object structures.

//* ⚠️ Small adjustments
//  • Exercise 5: You combined mapping and joining in one step. While that works, it means the result is a string rather than an array, which may limit reusability.
//      • Recommended: keep .map() for building the array and use .join() only when formatting for output.

//* 📊 Overall
//  You’ve shown a solid grasp of map(), including:
//  • Transforming primitive values
//  • Transforming into objects
//  • Formatting numeric results
//  • Combining map() with other methods (join, toFixed)

//TODO  🧩 Step 6: Project Integration — Product Card Data Mapper

//* 🖼️ Scenario
//  You are building a catalog page for an online store. The backend returns raw product data, but your UI components expect a clean, mapped shape for rendering product cards.


//TODO  🎫 Step 7: Exit Ticket — Array.map() Method

//* Answer these briefly to check your understanding:
//? 1. What does map() return after it executes its callback on every element?
//! Answer: The map() method return a new value after the callback that becomes the element in the new array.

//  ‼️ Feedback: ✅ Correct — and to phrase it precisely:
//  The map() method returns a new array containing the values returned by the callback for each element of the original array.

//? 2. Does map() modify the original array? Why or why not?
//! Answer: The map() method does not mutate the original array, because will create a new array.

//  ‼️ Feedback: ✅ Exactly — map() is non-mutating because it always builds and returns a brand-new array, leaving the original untouched.

//? 3. If the callback in map() does not explicitly return a value, what will the resulting array contain?
//! Answer: If the callback in map() does not explicitly return a value, will return an "undefined" as value.

//  ‼️ Feedback: ✅ Correct — if there’s no explicit return in the callback (especially when using curly braces), each position in the new array will be undefined.

//? 4. Why is map() more suitable than forEach() when transforming data?
//! Answer: The map() method is more suitable than forEach() method if I want to perform an action without creating a new array.

//  ‼️ Feedback: Almost — but that’s actually the case for forEach(), not map().
//  Here’s the correct reasoning:
//  map() is more suitable than forEach() when transforming data because map() returns a new array containing the transformed values, while forEach() always returns undefined and is only for performing actions without creating a new array.

//? 5. Give one real-world example where map() would be the best method to use.
//! Answer: A real-world example where map() is the best method to use is when I need to convert a list of user email addresses into a list of user objects with additional properties, such as adding a default role to each user.

//  ‼️ Feedback: ✅ Perfect — that’s a great practical use case.
//  It’s a clear transformation scenario: starting from a list of strings and turning them into a list of structured objects, each with additional properties. That’s exactly where map() shines.
