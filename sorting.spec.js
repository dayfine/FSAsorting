describe('Bubble Sort', function () {
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough() // replace existing `tootsiepop['lick']` method
  })

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([])
  })

  it('if it has 1 item, return same array', function () {
    expect(bubbleSort([5])).toEqual([5])
  })

  it('sorts an array of 2 items correctly', function () {
    expect(bubbleSort([5, 2])).toEqual([2, 5])
    expect(swap.calls.count()).toEqual(1)
  })

  it('sorts a large array', function () {
    expect(bubbleSort([23, 42, 4, 15, 16, 8])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for worst peformance case ', function () {
    expect(bubbleSort([42, 23, 16, 15, 8, 4])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for random array', function () {
    var arr = Array(Math.floor(Math.random() * 25)+10)
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 200)
    }

    expect(bubbleSort(arr)).toEqual(arr.sort((a, b) => a - b))
  })
})


describe('Merge Sort', function () {
  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([])
  })

  it('if it has 1 item, return same array', function () {
    expect(mergeSort([5])).toEqual([5])
  })

  it('sorts an array of 2 items correctly', function () {
    expect(mergeSort([5, 2])).toEqual([2, 5])
  })

  it('sorts a large array', function () {
    expect(mergeSort([23, 42, 4, 15, 16, 8])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for worst peformance case', function () {
    expect(mergeSort([42, 23, 16, 15, 8, 4])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for random array', function () {
    var arr = Array(Math.floor(Math.random() * 25)+10)
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 200)
    }

    expect(mergeSort(arr)).toEqual(arr.sort((a, b) => a - b))
  })
})

describe('Insertion Sort', function () {
  it('handles an empty array', function () {
    expect(insertionSort([])).toEqual([])
  })

  it('if it has 1 item, return same array', function () {
    expect(insertionSort([5])).toEqual([5])
  })

  it('sorts an array of 2 items correctly', function () {
    expect(insertionSort([5, 2])).toEqual([2, 5])
  })

  it('sorts a large array', function () {
    expect(insertionSort([23, 42, 4, 15, 16, 8])).toEqual([4, 8, 15, 16, 23, 42])
    expect(insertionSort([42, 15, 4, 23, 16, 8])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for worst peformance case', function () {
    expect(insertionSort([42, 23, 16, 15, 8, 4])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for random array', function () {
    var arr = Array(Math.floor(Math.random() * 25)+10)
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 200)
    }

    expect(insertionSort(arr)).toEqual(arr.sort((a, b) => a - b))
  })
})

describe('Quick Sort', function () {
  it('handles an empty array', function () {
    expect(quickSort([])).toEqual([])
  })

  it('if it has 1 item, return same array', function () {
    expect(quickSort([5])).toEqual([5])
  })

  it('sorts an array of 2 items correctly', function () {
    expect(quickSort([5, 2])).toEqual([2, 5])
  })

  it('sorts a large array', function () {
    expect(quickSort([23, 42, 4, 15, 16, 8])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for worst peformance case', function () {
    expect(quickSort([42, 23, 16, 15, 8, 4])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for random array', function () {
    var arr = Array(Math.floor(Math.random() * 25)+10)
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 200)
    }

    expect(quickSort(arr)).toEqual(arr.sort((a, b) => a - b))
  })
})

describe('Heap Sort', function () {
  it('handles an empty array', function () {
    expect(heapSort([])).toEqual([])
  })

  it('if it has 1 item, return same array', function () {
    expect(heapSort([5])).toEqual([5])
  })

  it('sorts an array of 2 items correctly', function () {
    expect(heapSort([5, 2])).toEqual([2, 5])
  })

  it('sorts a large array', function () {
    expect(heapSort([23, 42, 4, 15, 16, 8])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for worst peformance case', function () {
    expect(heapSort([42, 23, 16, 15, 8, 4])).toEqual([4, 8, 15, 16, 23, 42])
  })

  it('works for random array', function () {
    var arr = Array(Math.floor(Math.random() * 25)+10)
    for (var i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 200)
    }

    expect(heapSort(arr)).toEqual(arr.sort((a, b) => a - b))
  })
})
