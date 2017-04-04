function repeat(fn, n) {
let i = 0;
  while (i < n) {
    fn();
    i++;
  }
}
function hello() {
  console.log('hello world');
}
function goodbye() {
  console.log('goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);
