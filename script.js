function getWordsArray(words) {
    var returnWords = [];
    var currWord = '';

    for (var i = 0; i <= words.length; i++) {
        if (words[i] === ' ' || i === words.length) {
            returnWords.push(currWord);
            currWord = ''; 
        }
        else {
            currWord += words[i];
        }
    }

    return returnWords;
}

function isEvenNumberOfWords(words) {
    if (words.length % 2) {
        return true;
    } else {
        return false;
    }
}

function reverseWords(words) {
    // get array of words
    var wordsArray = getWordsArray(words);
    var j = wordsArray.length - 1;
    var temp = null;

    if (isEvenNumberOfWords(words)) {
        for (var i = 0; i < wordsArray.length / 2; i++) {
            temp = wordsArray[i];
            wordsArray[i] = wordsArray[j];
            wordsArray[j] = temp;
            j--;
        }    
    } else {
        for (var i = 0; i < Math.floor(wordsArray.length / 2); i++) {
            temp = wordsArray[i];
            wordsArray[i] = wordsArray[j];
            wordsArray[j] = temp;
            j--;
        }    
    }
    
    return wordsArray;
}

var message = [  'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l'];
var result = reverseWords(message);
console.log(result);