function split (wholeArray) {
  var middle = Math.floor(wholeArray.length / 2)
  return [wholeArray.slice(0, middle), wholeArray.slice(middle)]
}

function merge (arr1, arr2) {
  var ret = []
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      ret.push(arr1.shift())
    } else {
      ret.push(arr2.shift())
    }
  }

  return ret.concat(arr1).concat(arr2)
}

function mergeSort (array) {
  if (array.length <= 1) return array

  return merge(
    mergeSort(split(array)[0]),
    mergeSort(split(array)[1])
  )
}
