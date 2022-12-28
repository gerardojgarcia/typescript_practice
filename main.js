var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }
    return Student;
}());
var containerEl = document.getElementById('container');
var btn = document.querySelector('.button');
var number = 0;
var displayNumber = document.querySelector('.display-number');
var btnReset = document.querySelector('.button-reset');
btnReset.addEventListener('click', function () {
    number = 0;
    var resetNumber = number.toString();
    displayNumber.textContent = resetNumber;
});
btn.addEventListener("click", function () {
    console.log('i was clicked', number);
    if (number >= 10) {
        number = 0;
    }
    else {
        number++;
    }
    var newNumber = number.toString();
    displayNumber.textContent = newNumber;
});
var sliderCount = document.querySelector('.slider-number');
var slider = document.querySelector('#slider');
slider.addEventListener('input', function () {
    var sliderValue = this.value;
    sliderCount.textContent = sliderValue;
    console.log(this.value);
});
