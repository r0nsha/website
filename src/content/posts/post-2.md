---
title: "Testing markdown features"
pubDate: 2025-07-05
tags: ["test", "markdown", "features"]
---

This post is designed to **stress-test your blog’s styles**.

---

## Text styles

- _Italic_
- **Bold**
- ~~Strikethrough~~
- `Inline code`

---

## Lists

- Item one
- Item two
    - Nested
- Item three

1. First
2. Second
3. Third

---

## Quote

> “The cosmos is within us. We are made of star-stuff.” — Carl Sagan

---

## Code

JavaScript code:

```javascript
/**
 * A simple greeting function.
 * @param {string} name - The name to greet.
 * @returns {string}
 */
function greet(name) {
    const prefix = "Hello";
    let message = `${prefix}, ${name}!`;

    if (name === "World") {
        message += " Have a great day!";
    } else if (name === "Neovim") {
        message += " Editing with power!";
    }

    return message;
}

// Define an array of names
const names = ["Markdown", "World", "Neovim", "User"];

// Loop through the names and greet each one
for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    console.log(greet(currentName));
}

// Example of an object and its properties
const userProfile = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isActive: true,
    roles: ["admin", "editor"],
};

console.log(`User: ${userProfile.firstName} ${userProfile.lastName}, Age: ${userProfile.age}`);

// A function using arrow syntax
const add = (a, b) => a + b;
console.log(`5 + 3 = ${add(5, 3)}`);

// Asynchronous example (simulated)
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

fetchData().then((data) => console.log(data));

// More complex array manipulation
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared numbers:", squaredNumbers);

// Destructuring assignment
const { firstName, age } = userProfile;
console.log(`Destructured: ${firstName}, ${age}`);

// Template literals with embedded expressions
const item = "apple";
const price = 0.99;
console.log(`The ${item} costs $${price.toFixed(2)}.`);
```

This markdown file also contains a list:

- Item 1
- Item 2
    - Subitem 2.1
    - Subitem 2.2
- Item 3

And a table:

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

Rust code[^1]:

```rust
fn main() {
    // Declare a mutable variable
    let mut counter = 0;

    // Loop from 0 to 4 (exclusive)
    for i in 0..5 {
        counter += 1;
        println!("Loop iteration: {}, Counter: {}", i, counter);
    }

    // A simple if statement
    if counter > 3 {
        println!("Counter is greater than 3!");
    } else {
        println!("Counter is not greater than 3.");
    }

    // Define a simple function
    fn greet(name: &str) {
        println!("Hello, {}!", name);
    }

    greet("Rustaceans");

    println!("Final counter value: {}", counter);
}
```

[^1]: This is a footnote about the Rust programming language.
