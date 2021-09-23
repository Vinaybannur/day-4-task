# day-4-task
-->How to compare two JSON have the same properties without order?
 var obj1 = { name: "Person 1", age:5 };
 var obj2 = { age:5, name: "Person 1" };


JSON.stringify(obj1)===JSON.stringify(obj2)
// false

_.isEqual(obj1, obj2)
//true


-->_.isEqual() method is the best way to compare two JSON object.

This will not consider the order of the keys in object and check for the equality of object.
