//https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    let result = grades.map(g => {
        if(g >= 38 && g <= 99){
            g = Array.from(String(g));
            if(g[1] === "3" || g[1] === "4"){
                g[1] = "5";
            }
            else if(g[1] === "8" || g[1] === "9"){
                g[0] = +g[0] + 1;
                g[1] = "0";
            }
            return +g.join().replace(",","");

        }
        else return g;

    })

    return result

}