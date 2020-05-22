// function reverse(string) {
//   var rev = string.split('').reverse().join('');

//   console.log(rev);
// }
// reverse('A quick brown fox jumps over the lazy dog');

var string = 'I like Black Coffee';

console.log(string.length);
var newString = '';
for (let i = string.length - 1; i >= 0; i--) {
  newString = newString + string[i];
}
console.log(newString);
