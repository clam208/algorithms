// THE ARRAY NOTES
// up until now anytime i need to create a new array in run time i always initialized 
//an empty array for that and that is not a bad idea but we need to learn array contructors
function prefill(n, v) {
// when we run an array contructor the first parameter is the length, here it is 6 itmes
// since its 6 by default when we hit the fill it it fills it up with v 6 times
// one of the major differences is that array contructor comes with a default length
//
    return Array(6).fill(v);
  }

// CALL AND APPLY