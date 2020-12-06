//Apples And Oranges
//https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges){
    let appleCounter = 0;
    let orangeCounter = 0;
    apples = apples.map(loc => loc + a);
    oranges = oranges.map(loc => loc + b);
    
    for(let i =0 ; i < apples.length; i++){
        if(apples[i] >= s && apples[i] <= t){
            appleCounter++
        }
    }
    for(let i =0 ; i < oranges.length; i++){
        if(oranges[i] >= s && oranges[i] <= t){
            orangeCounter++
        }
    }

    console.log(appleCounter);
    console.log(orangeCounter);
}
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])
