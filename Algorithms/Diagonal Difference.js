function diagonalDifference(arr) {
  let newArr = [];
  let rtl = 0;
  let ltr = 0;

  for(let i = 1; i < arr.length; i++){
    
    if(arr[i].length < arr[i-1].length || arr[i].length === arr[i-1].length){
      newArr.push(arr[i-1]);
      if(i === arr.length-1){
        newArr.push(arr[i]);
      }
    }
  }

  for(let i = 0; i < newArr.length; i++){
    let index = newArr.length - (i + 1);
    ltr += newArr[i][i];
    rtl += newArr[i][index];
  }
  return Math.abs(ltr-rtl)
}

// 3 December , 2020
// Diagonal Diffrence
//https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=profile