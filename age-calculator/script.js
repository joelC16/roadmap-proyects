import { DateTime } from 'https://cdn.skypack.dev/luxon'
const age = datepicker('.age-calculate', { id: 1 });

const button = document.getElementById('button')
button.addEventListener('click', function (e) {
    e.preventDefault()
    let age_men = document.querySelector('.age-calculate').value
    const result = document.getElementById('result')
    if (!age_men) {
        result.innerText = '¡Completa la fecha de nacimiento!'
        return
    }
    let dateObj = DateTime.fromJSDate(new Date(age_men));

    if (!dateObj.isValid) {
        result.innerText = '¡Formato de fecha no válido!'
        return
    }
    const now = DateTime.now()
    if (dateObj.year > now.year || dateObj.year == now.year && dateObj.month > now.month ||
        dateObj.year == now.year && dateObj.month === now.month && dateObj.day > now.day
    ) {
        result.innerText = '¡La fecha de nacimiento no puede ser mayor que la fecha actual!'
        return
    }

    const { years, months } = DateTime.now().diff(dateObj, ['years', 'months']).toObject();
    result.innerText = `Tienes ${Math.floor(years)} años y ${Math.floor(months)} meses`;
});
