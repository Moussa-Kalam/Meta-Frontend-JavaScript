dishData = [
    {
        "Italian pasta Price (incl.tax)": "$ 11.46",
        "Rice with veggies Price (incl.tax)": "$ 10.38",
        "Chicken with potatoes Price (incl.tax)": "$ 18.66",
        "Vegetarian Pizza Price (incl.tax)": "$ 7.74"
    },

    {
        "Italian pasta Price (incl.tax)": "$ 9.55",
        "Rice with veggies Price (incl.tax)": "$ 8.65",
        "Chicken with potatoes Price (incl.tax)": "$ 15.55",
        "Vegetarian Pizza Price (incl.tax)": "$ 6.45"
    }
]



function getPrices (finalPrice) {
    if (finalPrice === true) {
        for (let item of Object.keys(dishData[0])) {
            console.log("Prices with 20% tax:")
            console.log("Dish:", item, ": ", dishData[0][item]);
        }
    } else if (finalPrice === false) {
        for (let item of Object.keys(dishData[1])) {
            console.log("Prices without tax:")
            console.log("Dish",item, ": ", dishData[1][item])
        }
    } else {
        console.log("Please enter a valid choice");
    }
}

getPrices(true);
// getPrices(false);