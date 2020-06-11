function checkValid(chkField) {
    var fieldToCheck = document.getElementById(chkField).value;
    if ( !fieldToCheck || fieldToCheck.length < 5 ) {
        errorMsg = "Field must be at least 5 characters";
    } else {
        errorMsg = '';
    }
    displayError(errorMsg);
}

function checkIsbn() {
    var isbnText = document.getElementById("book_isbn");
    if (isValidIsbn(isbnText.value)) {
        console.log("Valid ISBN");
        errorMsg = "";
    } else {
        console.log("Invalid ISBN");
        errorMsg = "Invalid ISBN number";
    }
    displayError(errorMsg);
}

function displayError(errorMsg){
    var errorField = document.getElementById('errorfield');
    errorField.innerHTML = errorMsg;
}

// stolen the algorithm off the internet
var isValidIsbn = function(str) {

    var sum,
        weight,
        digit,
        check,
        i;

    str = str.toString();

    str = str.replace(/[^0-9X]/gi, '');

    if (str.length != 10 && str.length != 13) {
        return false;
    }

    if (str.length == 13) {
        sum = 0;
        for (i = 0; i < 12; i++) {
            digit = parseInt(str[i]);
            if (i % 2 == 1) {
                sum += 3*digit;
            } else {
                sum += digit;
            }
        }
        check = (10 - (sum % 10)) % 10;
        return (check == str[str.length-1]);
    }

    if (str.length == 10) {
        weight = 10;
        sum = 0;
        for (i = 0; i < 9; i++) {
            digit = parseInt(str[i]);
            sum += weight*digit;
            weight--;
        }
        check = 11 - (sum % 11);
        if (check == 10) {
            check = 'X';
        }
        return (check == str[str.length-1].toUpperCase());
    }
}
export {checkValid, checkIsbn};