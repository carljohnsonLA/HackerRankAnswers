function kangaroo(x1, v1, x2, v2) {
    if(x1 > x2){
        if(v2 > v1){
            if((x1-x2) % (v2-v1) === 0){return "YES"}
            return "NO"
        }
    }
    else if(v1 > v2){
        if((x2-x1) % (v1-v2) === 0){return "YES"}
        return "NO"
    }
    return "NO"



}
//https://www.hackerrank.com/challenges/kangaroo/problem
