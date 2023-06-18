const yearsTens = document.getElementById('years-display-tens');
const yearsOnes = document.getElementById('years-display-ones');
const monthsTens = document.getElementById('months-display-tens');
const monthsOnes = document.getElementById('months-display-ones');
const daysTens = document.getElementById('days-display-tens');
const daysOnes = document.getElementById('days-display-ones');

const displayValues = [yearsTens, yearsOnes, monthsTens, monthsOnes, daysTens, daysOnes];

for (let val of displayValues) {
    for (i = 0; i < 10; i++) {
        val.innerHTML += ` ${i} `;
    }
}


function onSubmit(e) {
    e.preventDefault();
    const monthInput = document.getElementById('month-input').value;
    const dayInput = document.getElementById('day-input').value;
    const yearInput = document.getElementById('year-input').value;

    const today = new Date();
    let diff = today - new Date(yearInput, monthInput, dayInput); 

    if (diff < 0) {
        alert('Birthday cannot be in the future');
        return;
    }

    if (monthInput < 1 || monthInput > 12) {
        alert('Month invalid');
        return;
    }
    if (dayInput < 1 || monthInput > 31) {
        alert('Day invalid');
        return;
    }
    if (yearInput < 1910 || yearInput > 2023) {
        alert('Year invalid');
        return;
    }

    const ageYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= ageYears * (1000 * 60 * 60 * 24 * 365);
    const ageMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= ageMonths * (1000 * 60 * 60 * 24 * 30);
    const ageDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= ageDays * (1000 * 60 * 60 * 24);

    yearsTens.classList.add(`move-${ageYears.toString().charAt(0)}`);

}

