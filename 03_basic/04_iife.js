//  Immediately Invoked Function Expression(IIFE)

(function chai(){

    console.log(`db connected`);
})();

// IIFe is used to protect the poluction of global scope.
//  it is also used to emidiate execute function.

( function aurcode () {
    // named IIFE.
    console.log('db connected two');
})();

(() => {
    // simple IIFE
    // or unnamed IIFE.
    console.log('db connected three')
})();

( (name) => {
    console.log(`db connected four ${name}`);
})("harsh")