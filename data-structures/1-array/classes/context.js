// context
// this - means where object environment that we are currently are.
console.log(this); // root object (Window / globalThis)

function a() {
  console.log(this);
}

const object4 = {
  a: function() {
    console.log(this);
  }
};

object4.a();
