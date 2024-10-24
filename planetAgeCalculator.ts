const ageInput:HTMLInputElement = document.querySelector('.ageInput')
const button: HTMLButtonElement = document.querySelector('button')
const outputDiv: HTMLElement = document.querySelector('.output')

const planetYears = {
    Mercury:88/365,
    Venus:225/365,
    Mars:687/365,
    Jupiter:4333/365,
    Saturn: 10756/365
    }

const showAge = ():void => {
    const planetName: string = document.querySelector<HTMLInputElement>('input[name="planets"]:checked').value
    const planetAge: string = (Number(ageInput.value) / planetYears[planetName]).toFixed(2)
    outputDiv.textContent = 'Your age on ' + planetName + ' is ' + planetAge
}

button.addEventListener('click', showAge)