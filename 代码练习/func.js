var x='global'
function test1() {
  console.log(x);
}

function test2() {
  var x='local';
  test1();
}

test2();