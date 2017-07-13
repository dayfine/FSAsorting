/*
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let
    pvpt = Math.floor(Math.random()*arr.length),
    pval = arr[pvpt], memo = Array(arr.length),
    head = 0, equals = 0, tail = arr.length - 1,
    front, middle, end

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] < pval) memo[head++]=arr[i]
    else if (arr[i] > pval ) memo[tail--]=arr[i]
    else equals++
  }

  if (equals===arr.length) return arr

  front = (head===0)?[]:quickSort(memo.slice(0,head))
  middle = (pval)?Array(equals).fill(pval):[]
  end = (tail+1===arr.length)?[]:quickSort(memo.slice(tail+1))

  ret = front.concat(middle).concat(end)

  return ret
}
*/

function quickSort(arr, low, high) {
  if (low===0 && high===0) return arr
  low = low || 0
  high = high || arr.length - 1

  if (low < high) {
    pi = partition(arr, low, high)
    quickSort(arr, low, pi-1)
    quickSort(arr, pi+1, high)
  }

  return arr
}

function partition(arr, low, high) {
  var i = low - 1, j = low, pivot = arr[high]
  for ( ; j < high; j++ ){
    if (arr[j] <= pivot) {
      i++
      swap(i, j, arr)
    }
  }
  i++
  swap(i, high, arr)
  return i
}

// function swap (a, b, arr) {
//   if (a < b) {
//     var temp = arr[b]
//     arr[b] = arr[a]
//     arr[a] = temp
//   }
// }
