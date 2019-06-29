//Free code camp practice algos
// finds the difference in two arrays and  pushes the differences into a new array
var diffArray=(arr1, arr2)=> {
    var newArr = [];
    for(var i =0;i<arr1.length;i++){
      if(arr2.indexOf(arr1[i])==-1){
        newArr.push(arr1[i])
      }
    }
    for(var i=0;i<arr2.length;i++){
      if(arr1.indexOf(arr2[i])===-1){
        newArr.push(arr2[i])
      }
    }
    return newArr;
  };
  function destroyer() {
    var newArr=arguments[0];
    // array.from creates new array from object,strings, and array like objects
    var args=Array.from(arguments).slice(1);
    // loops through the newArr and performs a function on each value
    var destroyed=newArr.filter(
        //return values not included in the args array
        function(value){
             return !args.includes(value); 
        });
    
      return destroyed;
    }
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2,3));

    