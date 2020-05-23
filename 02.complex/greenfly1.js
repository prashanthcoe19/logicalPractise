var mature = new Array();
var child = new Array();
var day = new Array();
var mature = 0;
var child = 0;

day[1] = {
  mature: 1,
  child: 8,
};

for (i = 2; i <= 7; i++) {
  day[i] = {
    mature: (mature[i] = day[1].mature),
    child: (child[i] = day[i - 1].child + day[i - 1].mature * 8),
  };
  console.log('day', i, 'mature', day[i].mature, 'child', day[i].child);
}
console.log(day[2].child);

for (i = 8; i <= 28; i++) {
  day[i] = {
    mature: (mature[i] = day[i - 1].mature + day[i - 7].mature * 8),
    child: (child[i] = day[i - 7].child * 8 + day[i - 1].child),
  };
  console.log(
    'day',
    i,
    'mature',
    day[i].mature,
    'child',
    day[i].child,
    'total',
    day[i].mature + day[i].child
  );
}
