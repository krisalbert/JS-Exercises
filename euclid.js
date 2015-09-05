// Now, use your merge function to complete the euclid function
// defined below. Euclid should take two arrays, each of which
// has an equal number of numerical elements, and return the
// euclidean distance between them. 
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

var euclid = function(coords1, coords2){  
  //Your code here.
  //You should not use any loops and should
  //instead use your original merge function.
  var total = [];
  merge(coords1,coords2,function(a,b){
    console.log(a,b);
    total.push(Math.pow(a-b,2));
  });
  return Math.sqrt(total[0]+total[1]);
}

var x = euclid([3, -4], [6, 0]);
console.log(x);

//x should now equal approximately 1.08.