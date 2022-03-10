dycalendar.draw ({
    target: '#dycalendar',
    type: 'month',
    dayformat: 'full',
    monthformat: 'full',
    highlighttargetdate: true,
    prevnextbutton : "show",
})


let calendario = document.querySelector('.dycalendar-header');


document.querySelector('.dycalendar-body tbody').addEventListener('click', (e) => {
    let seleccionado = document.querySelector('.dycalendar-target-date');

    if(seleccionado.classList.contains('dycalendar-target-date')){
        seleccionado.classList.remove('dycalendar-target-date');
        e.target.classList.add('dycalendar-target-date');
    }
});