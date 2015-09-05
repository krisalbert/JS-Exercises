// Complete the following merge function such that is behaves as 
// described in the example below. Merge should take two arrays of 
// numbers of identical length and a callback function.
// from http://suchisthepowerofjs.com/2014/11/02/ready-for-hackreactor/

var merge = function(array1, array2, callback){  
  //your code here.
  var myArr=[];
  for(x=0;x<array1.length;x++){
      //console.log("y",array1[x]);
      //console.log("z",array2[x]);
      myArr.push(callback(array1[x], array2[x]));
  }
  return myArr;

}

var x = merge([1, 2, 3, 4], [5, 6, 7, 8], function(a, b){  
  return a + b;
});

//x should now equal [6, 8, 10, 12].

console.log(x);