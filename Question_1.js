function sort(a, b, c) {
  var max = 0;
  var min = Infinity;
  var middle = 0;
  if (a > b && a > c) {
    max = a;
    if (b > c) {
      min = c;
      middle = b;
    } else {
      middle = c;
      min = b;
    }
  } else if (b > a && b > c) {
    max = b;
    if (a > c) {
      min = c;
      middle = a;
    } else {
      min = a;
      middle = c;
    }
  } else {
    max = c;
    if (a > b) {
      middle = a;
      min = b;
    } else {
      min = a;
      middle = b;
    }
  }
  alert(max + "," + middle + "," + min);
}
sort(3, -7, 2);
