var a = prompt('Enter the value of a: '),
    b = prompt('Enter the value of b: '),
    value = (a * a) - (2 * a * b) + (b * b);
console.log(value);
if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0) {
    console.log('wynik ujemny');
} else {
    console.log('wynik jest równy 0');
}
