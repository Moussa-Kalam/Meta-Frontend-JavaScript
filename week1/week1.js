/*
Expected output:
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/

for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal");
    } else if (i == 2) {
        console.log("Silver medal");
    } else if (i == 3) {
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}


/*
Convert the conditionals of the previous task 
to a switch statement
*/

for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
            break;
    }
}

