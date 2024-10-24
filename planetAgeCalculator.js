var ageInput = document.querySelector('.ageInput');
var button = document.querySelector('button');
var outputDiv = document.querySelector('.output');
var planetYears = {
    Mercury: 88 / 365,
    Venus: 225 / 365,
    Mars: 687 / 365,
    Jupiter: 4333 / 365,
    Saturn: 10756 / 365
};
var showAge = function () {
    var planetName = document.querySelector('input[name="planets"]:checked').value;
    var planetAge = (Number(ageInput.value) / planetYears[planetName]).toFixed(2);
    outputDiv.textContent = 'Your age on ' + planetName + ' is ' + planetAge;
};
button.addEventListener('click', showAge);
