//Time Conversion
//https://www.hackerrank.com/challenges/time-conversion/problem?h_r=profile

function timeConversion(s) {
    let pmOram = s.split("").slice(8).join().replace(",","");
    let hour = s.split("").slice(0,2).join().replace(",","");
    s = s.replace(pmOram, "");
     if(pmOram === "AM"){
         if(hour === "12"){
             s = s.replace(hour,"00");
             return s;
         }
         else{return s}

    }
    else{
        if(hour === "12"){
            return s;
        }
        else{
            let newHour = +hour + 12;
            s = s.replace(hour,String(newHour));
            return s;
        }

    }

}

console.log(timeConversion("06:40:03AM"));