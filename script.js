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

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]

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

//? 2. Transformation Awareness
//  • If the callback in `map()` does not have a return statement, what will the new array contain?
//! Answer: If the callback in `map()` does not have a return statement the new array will contain only undefined. 

//? 3. Consistency Check
//  • Will the new array returned by `map()` always have the same length as the original array? Why or why not?
//! Answer: Always returns a new array with the same length as the original because does not mutate the original array.

//? 4. Object Mutation
//  • Does `map()` protect against changes to objects inside the array? Why or why not?
//! Answer: The `map()` method does not mutate the original array (unless elements are objects and are mutated inside the callback).

//? 5. Debugging Insight
//  • Given:

const nums = [1, 2, 3];
const result = nums.map(num => {
    num * 2;
});

console.log(result);

//? What will be logged, and why?
//! Answer: The given code will log undefined because `return` is missing from the code right before "num * 2;".


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
    students.map(student => student)
}



























