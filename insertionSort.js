function insertionSort (arr) {
  if (arr.length <= 1) return arr

  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++){
      if (arr[i]-arr[j]<0) arr.splice(j,0,(arr.splice(i,1)[0]))
    }
  }

  return arr
}
