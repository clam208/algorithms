// takes a range and adds all numbers in the range
function sumAll(arr) {
    // empty array to add in numbers that are between the max and min range
    var sumOfRange= [];
   //pushes all numbers between the max and min value of a range into the sumOf range array
   for (var count = Math.min.apply(0,arr); count<=Math.max.apply(0,arr);count++){
       sumOfRange.push(count);
   }
   //uses the reduce method to loop throuh the sumOfRange and add all the numbers together
   return sumOfRange.reduce(function(total,nextVal){
       return total+nextVal;
   });
   }
   function diffArray(arr1, arr2) {
     var newArr = arr1.concat(arr2);
     var different= newArr.filter(function(element,index,self){
           return index === self.indexOf(element);
     });
     return different;
   }
   // finds and one odd or even number in an array that consists of the opposite
   function findOutlier(integers){
   
    var evenfilter = integers.filter(function(x){
        return x % 2==0;
    });
     
      var oddfilter = integers.filter(function(x){
        return x % 2!==0;
    });
      
     if(evenfilter.length === 0){
         return evenfilter[0];
     }
     else {
     return oddfilter[0];
   }
   }
   
   function persistence(num) {
    var numStr=num.toString().split("");
    var real= numStr.map(Number);
    var persistance=real.reduce(function(total,nextVal){
        return total*nextVal;
    });
    if (persistance<10){
    return persistance;
    }
    else {
        persistence(persistance);
    }
    }
    // password validation, requires 6 chars at least, contains a lowercase, contains uppercase, has a number
    ///[A-Z]/; is to check for ONE instance of a uppercase if you want all do /[A-Z]/g;
   function validate(password) {
    var upperCaseVal= /[A-Z]/;
    var lowerCaseVal =/[a-z]/;
    var numVal= /[0-9]/;
    if (password.length<=5){
        return "need 6 characters or more"
    }
    // uses my uppercase reg ex as a test criterion to scan for at least one uppercase
    if (upperCaseVal.test(password)===false){
        return "need one uppercase letter"
    }
    //same as above but with lower case
     if (lowerCaseVal.test(password)===false){
        return "need one lowercase letter"
    }
    if (numVal.test(password)===false){
        return "need one number"
    }
     return"great job you rock"
   }


function fizzbuzz(n){
var arr=[];
for(var i=1;i<=n;i++) {
arr.push(i);
}
for (var j=0;j<arr.length;j++){
    if(arr[j]%3===0 && arr[j]%5===0){
        arr[j]= "FizzBuzz";
     }
  if(arr[j]%3===0){
      arr[j]= "Fizz";
  }
  if(arr[j]%5===0){
    arr[j]= "Buzz";
}
}
return arr;
}


// fibonacci with a for loop
// if you know that whatever arry comes out, the first few elements will always be the same, than go \
//ahead and initialize them
function fibonacci(n) {
var arr=[];
   for(let i=0; i<n;i++){
       arr.push(i);
   }
   for(let i=2;i<n;i++){
       arr[i]=arr[i-1]+arr[i-2]
   }
   return arr;
}

function factorial(n){
   for(let i=n-1;i>=1;i--){
       n=n*i;
   }
   return n;
  }

  // function to implement facebook like system
  function likes(names) {
    var result ="";
        if(names.length===0){
         result='no one likes this';
        }
        else if(names.length<=1){
         result=result+names[0]+" likes this";   
        }
        else if(names.length<=2){
        result=result+names[0]+" and "+ names[1]+ " like this";
        }
        else if(names.length<=3){
             result=result+names[0]+", "+ names[1]+  " and "+names[2]+" like this";
        }
        else {
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
        }
      return result;
  }

  // takes an array of numbers converts them to a whole number than adds 1 to number and back to array
  upArray=(arr)=>{
   var up = Number(arr.join(""))+1;
   if(isNaN(up)){
       return null;
   }else{
   up=up.toString().split("");
   up=up.map(function(value){
    value=parseInt(value,10);
    return value;
   });
    return up;
}
};
// take aways from this kata, while it pass some basic test their are some very out there ones that fail
// study arr.some, !arr.length, i know what length is thats basic but a not operator at the start???

 meeting=(s)=> {
    // takes a set of first and last names in string format and sorts them alphabetically by last name
    var order= s.toUpperCase().split(";");// since all names in str is seperated by ; we make an array of names based on ;
    var lastFirst=(value)=>{return value.split(":").reverse().join(", ");} // sorting by last name requires reversing names
    var format=(value)=>{ return "(" + value +")";}// used to make the format we want the names in
    order=order.map(lastFirst).sort();// aphabetecal sort
    order=order.map(format).join("");// once the array of names is sorted we map through them and apply our format and join them back to string form
    return order;
}
// take away the sort method takes uppercases into consideration, if you want to format all as upper do so
//at the start of the program not the end
//console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));

// some stupid name draft for reward game that involves scoring a person name based on each letter in their name
 rank=(st, we, n)=> {
    var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    var number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    // binds elements in the alphabet array to its associated number in the numbers array, the rules are
    // the leter a=1,b=2 and so on, the numbers that each letter is binded to is used in a point scoring system
    // where we add all the numbers each letter in a name together and add an addtional point based'
    // on the length of the first name
    var total=st.map(value=>{
     value=value.split("") // after mapping through an array
     var points= value.length+value.map(value=>{return  number[alphabet.indexOf(value.toLowerCase())]})
     .reduce((value,current)=>{return value + current })
     return points
    })
    // once all names points are accounted for we multiply them by the weights assigned to them
    //the weights are put in an array and match the index of the names in the name array
    // so if paul is index 0 in the name array we multiply by the number in index 0 of the weights array
    var weigtedTotal=we.map(value=>{
        return value*total[we.indexOf(value)]
    })
    var format=st.map(value=>{
        //var formated= weigtedTotal.
        return value+":"+weigtedTotal[st.indexOf(value)]
    })
    // we now have an array of points 
     return format
}
//story so far have an array with names and points, still need to make quality of life changes that just
//gives the best number
//console.log(rank(["paul","abc","ab","palu"],[2,10,3,6]))
//console.log(rank(["COLIN",'AMANDBA','AMANDAB','CAROL','PauL','JOSEPH'],[1, 4, 4, 5, 2, 1]))

//finds unique numbers in an array full of the same numbers
function findUniq(arr) {
    var outlier=arr.filter((value,index)=>{
       if(arr.indexOf(value)==index )
           return index
    })
     //outlier=Number(outlier.join(""))
    return Number(outlier.join())
}
// needs heavy revisions
// take away, it works but alot of people on codewars were using a lastindex of method that i
// have not seen, time to study it, this code could be shorter and more efficient
  //console.log(findUniq([1,1,1,6,1,1]));


