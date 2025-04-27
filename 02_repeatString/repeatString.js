const repeatString = function (str, reps) {
    if (reps < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < reps; i++) {
        string += str;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;






// const repeatString = function(str, reps) {
//     if (reps < 0) return "ERROR";
//     let string ="";
//     for (let i = 0; i < reps; i++)
//         string += str; 
// }
