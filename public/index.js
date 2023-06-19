const yearsTens = document.getElementById('years-display-tens');
const yearsOnes = document.getElementById('years-display-ones');
const monthsTens = document.getElementById('months-display-tens');
const monthsOnes = document.getElementById('months-display-ones');
const daysTens = document.getElementById('days-display-tens');
const daysOnes = document.getElementById('days-display-ones');
const inputsList = document.getElementsByClassName('input');

const displayValues = [yearsTens, yearsOnes, monthsTens, monthsOnes, daysTens, daysOnes];

let currentYearsTens;
let currentYearsOnes;
let currentMonthsTens;
let currentMonthsOnes;
let currentDaysTens;
let currentDaysOnes;

for (let val of displayValues) {
    for (i = 0; i < 10; i++) {
        val.innerHTML += ` ${i} `;
    }
}

function onSubmit(e) {
    e.preventDefault();
    let isError = false;
    const monthInput = document.getElementById('month-input').value;
    const dayInput = document.getElementById('day-input').value;
    const yearInput = document.getElementById('year-input').value;
    const today = moment();

    if (monthInput < 1 || monthInput > 12) {
        inputsList[0].classList.add('invalid');
        isError = true;
    } else {
        inputsList[0].classList.remove('invalid');
    }

    if (dayInput < 1 || dayInput > 31) {
        inputsList[1].classList.add('invalid');
        isError = true;
    } else {
        inputsList[1].classList.remove('invalid');
    }
    if (yearInput < today.years() - 99 || yearInput > today.years()) {
        inputsList[2].classList.add('invalid');
        isError = true;
    } else {
        inputsList[2].classList.remove('invalid');
    }

    const bday = moment(`${yearInput}-${monthInput}-${dayInput}`);
    let diff = moment.preciseDiff(today, bday, true); 
    if (!diff.firstDateWasLater) {
        for (const input of inputsList) {
            input.classList.add('invalid');
            isError = true;
        }
    }
     
    if (isError) {
        return;
    }

    const ageYears = diff.years < 10 ? '0'.concat(diff.years.toString()) : diff.years.toString();
    const ageMonths = diff.months < 10 ? '0'.concat(diff.months.toString()) : diff.months.toString();
    const ageDays = diff.days < 10 ? '0'.concat(diff.days.toString()) : diff.days.toString();

    yearsTens.classList.remove(currentYearsTens);
    yearsOnes.classList.remove(currentYearsOnes);
    monthsTens.classList.remove(currentMonthsTens);
    monthsOnes.classList.remove(currentMonthsOnes);
    daysTens.classList.remove(currentDaysTens);
    daysOnes.classList.remove(currentDaysOnes);

    currentYearsTens = `move-${ageYears.charAt(0)}`;
    currentYearsOnes = `move-${ageYears.charAt(1)}`;
    currentMonthsTens = `move-${ageMonths.charAt(0)}`;
    currentMonthsOnes = `move-${ageMonths.charAt(1)}`;
    currentDaysTens = `move-${ageDays.charAt(0)}`;
    currentDaysOnes = `move-${ageDays.charAt(1)}`;

    yearsTens.classList.add(currentYearsTens);
    yearsOnes.classList.add(currentYearsOnes);
    monthsTens.classList.add(currentMonthsTens);
    monthsOnes.classList.add(currentMonthsOnes);
    daysTens.classList.add(currentDaysTens);
    daysOnes.classList.add(currentDaysOnes);

}

