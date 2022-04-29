// reference type
console.log([] === []);

const object1 = {
  value: 10
};
const object2 = object1 
// object2 reference the value of object1 (copy the address of object1)
 
const object3 = {
  value: 10
};

// Changed the property "value" of the object2 that currently referencing
object2.value = 20;
console.log(object1.value);




// instantiation
