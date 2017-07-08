describe('Bubble Sort', function(){
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('if it has 1 item, return same array', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });

  it('sorts an array of 2 items correctly', function(){
    expect( bubbleSort([5, 2]) ).toEqual( [2, 5] );
  });

  it('sorts a large array', function(){
    expect( bubbleSort([23, 42, 4, 15, 16, 8]) ).toEqual( [4, 8, 15, 16, 23, 42] );
  });
});
