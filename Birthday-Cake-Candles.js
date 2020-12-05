//Birth Day Cake Candles
// Algorithms 
//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen

function birthdayCakeCandles(candles) {
    candles = candles.sort((a,b) => a-b);
    let counter = 0;
    
    for(let i = 0; i < candles.length ;i++){
        if(candles[i] === candles[candles.length - 1]){
            counter++
        }
    }
    return counter;

}

console.log(birthdayCakeCandles([4,4,1,3]))