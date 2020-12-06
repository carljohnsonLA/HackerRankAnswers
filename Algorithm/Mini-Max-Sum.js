// Mini-Max Sum
//https://www.hackerrank.com/challenges/mini-max-sum/problem

let inp = [1,3,5,7,9];
function miniMaxSum(arr) {
    let i = 0;
    let min = 0;
    let max  = 0;
    arr = arr.sort();

    while(i < arr.length){
        if(i != 4){
            min += arr[i]
        }
        if(i != 0){
            max += arr[i]
        }
        i += 1;
    }
    return `${min} ${max}`;
}

console.log(miniMaxSum(inp))