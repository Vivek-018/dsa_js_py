// print the numbers in particular range
function printNumbers(Lrange, Urange) {
    // base case
    if (Lrange > Urange) {
        return;
    }

    console.log(Lrange);
    printNumbers(Lrange + 1, Urange);
}

printNumbers(1, 5);