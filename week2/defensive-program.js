/*
Defensive programming is all about assuming that all the arguments a function will receive are of 
the wrong type, the wrong value or both.

In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before they happen, 
so as to make your function less likely to cause errors because of faulty inputs.
*/


/* Case study
The length of the word parameter cannot be less than 2
The length of the match parameter must be 1
The type of both the word and the match parameter must be string
*/

function letterFinder(word, match) {
    var condition1 = typeof (word) == "string" && word.length >= 2;
    var condition2 = typeof (match) == "string" && match.length == 1;
    if (condition1 == true && condition2 == true) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
    }

    letterFinder(1, 2);
    letterFinder("cat", "c");
    letterFinder("hi", "i");
    letterFinder("Moussa", "s");

    