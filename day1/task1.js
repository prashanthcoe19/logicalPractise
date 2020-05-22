function reverse(string) {
  var newString = '';
  var newString1 = new Array();
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  var arr = new Array(newString);
  console.log(arr);
  var tobeReversed = arr.join('').split(' ');
  console.log(tobeReversed);
  var j = 0;
  for (let i = tobeReversed.length - 1; i >= 0; i--) {
    newString1[j] = tobeReversed[i];
    j++;
  }
  console.log(newString1.join(' '));
}
reverse('system of a down');
