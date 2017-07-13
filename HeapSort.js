function heapSort (arr) {
  var len = arr.length, i, temp

  for (i = len / 2; i > 0; ) {
    heapify(arr, len, --i)
  }

  for (i = len; i > 0; ) {
    swap(0,--i,arr)
    heapify(arr, i, 0)
  }

  return arr
}

function heapify(arr, size, root) {
  var
    largest = root,
    left = 2 * root + 1,
    right = 2 * root + 2

  if (left < size && arr[left] > arr[largest]) largest = left
  if (right < size && arr[right] > arr[largest]) largest = right

  if(largest !== root) {
    swap(root, largest, arr)
    heapify(arr, size, largest)
  }
}

