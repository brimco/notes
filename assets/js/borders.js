// borders
const val = {
    'border-width': 1, 
    'border-style': 'solid', 
    'border-color': 'black',
    'border-radius': '0'
}

const box = document.querySelector("#box-border")
const fill_radius = document.querySelector('#fill-border-radius')
const fill_border = document.querySelector('#fill-border')

for (let each of Object.keys(val)) {
    console.log(each)
    document.querySelector('#'.concat(each)).addEventListener('change', (event) => {
        val[each] = event.target.value

        let new_border = ''.concat(val['border-width'], 'px ', val['border-style'], ' ', val['border-color'])
        let new_radius = ''.concat(val['border-radius'], 'px')

        box.style.border = new_border
        box.style.borderRadius = new_radius
        fill_border.innerHTML = new_border.concat(';')
        fill_radius.innerHTML = new_radius.concat(';')
    })
}