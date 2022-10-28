// Decide your source of income base on your age
var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical");
}


// Determine your evening routine based on the day of the week
var day = "Monday";

switch(day){
    case "Monday":
        console.log("Go to school");
        break;
    case "Tuesday":
        console.log("Study from home");
        break;
    case "Wednesday":
        console.log("Practice with friends");
        break;
    case "Thursday":
        console.log("Meet your mentor");
        break;
    case "Friday":
        console.log("Review everything you learned today");
        break;
    case "Saturday":
        console.log("Go to the gym");
        break;
    case "Sunday":
        console.log("Get some rest. You deserve it!")
        break;
    default:
        console.log("There is no such day.")
}