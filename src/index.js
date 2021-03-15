exports.min = function min (array) {
  if (array === undefined) return 0;
  if (array.length === 0) return 0;
  mymin = array[0];
  for (i = 1; i < array.length; ++i) {
     if (array[i] < mymin) mymin = array[i];
  }
  return mymin;
}

exports.max = function max (array) {
  if (array === undefined) return 0;
  if (array.length === 0) return 0;
  mymax = array[0];
  for (i = 1; i < array.length; ++i) {
      if (array[i] > mymax) mymax = array[i];   
  }
  return mymax;
}

exports.avg = function avg (array) {
  if (array === undefined) return 0;
  if (array.length === 0) return 0;
  let l = 0;
  let summ = 0;
  let midd = 0;
  for (i = 0; i < array.length; i++) {
      l = array.length;
      summ += array[i];
  }
  midd = summ / l;
  return midd;
}
