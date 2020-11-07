// color picker
document.querySelector('#pick-color').addEventListener('change', (event) => {
    document.querySelector('#display-color-picker').innerHTML = event.target.value
})

// hex colors
const choose = document.querySelector('#choose-color')
const display = document.querySelector('#display-color')

choose.addEventListener('change', (event) => {
    display.style.background = `#${event.target.value}`
    display.style.padding = '1em'
})