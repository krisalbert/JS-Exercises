# JS-Exercises

Couple of JS exercises taken from: http://suchisthepowerofjs.com/2014/11/02/ready-for-hackreactor/

Complete the following merge function such that is behaves as described in the example below. Merge should take two arrays of numbers of identical length and a callback function.
```
var merge = function(array1, array2, callback){  
  //your code here.
}

var x = merge([1, 2, 3, 4], [5, 6, 7, 8], function(a, b){  
  return a + b;
});

//x should now equal [6, 8, 10, 12].
```

Now, use your merge function to complete the euclid function defined below. Euclid should take two arrays, each of which has an equal number of numerical elements, and return the euclidean distance between them. For a quick refresher on what Euclidean distance is, check here

```
var euclid = function(coords1, coords2){  
  //Your code here.
  //You should not use any loops and should
  //instead use your original merge function.
}

var x = euclid([1.2, 3.67], [2.0, 4.4]);

//x should now equal approximately 1.08.
```
