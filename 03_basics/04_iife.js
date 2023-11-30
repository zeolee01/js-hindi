// Immediately Invoked Function Expressions (IIFE)

// IIFE is a design pattern in JavaScript where a function is defined and executed immediately after its creation. 
// This pattern is often used to create a private scope for variables to avoid polluting the global scope and to prevent variable 
// name conflicts.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

