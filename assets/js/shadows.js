// box shadow
const current_values = {
    'h-offset': 0, 
    'v-offset': 0, 
    'blur' : 0,
    'spread': 0, 
    'color': 'black'
}

for (let each of Object.keys(current_values)) {
    document.querySelector('#'.concat(each)).addEventListener('change', (event) => {
        current_values[each] = event.target.value

        let new_shadow = ''
        for (let each of Object.keys(current_values)) {
            if (each == 'color') {
                new_shadow = new_shadow.concat(current_values[each])
            } else {
                new_shadow = new_shadow.concat(current_values[each], 'px ')
            }
        }
        document.querySelector("#box-shadow").style.boxShadow = new_shadow
        document.querySelector('#fill-box-shadow').innerHTML = new_shadow
    })
}

// text shadow
const text_current_values = {
    'h-shadow': 0, 
    'v-shadow': 0, 
    'blur-radius' : 0,
    't-color': 'black', 
    'text-color': 'black'
}

for (let each of Object.keys(text_current_values)) {
    document.querySelector('#'.concat(each)).addEventListener('change', (event) => {
        text_current_values[each] = event.target.value

        let new_shadow = ''
        for (let each of Object.keys(text_current_values)) {
            if (each == 't-color') {
                new_shadow = new_shadow.concat(text_current_values[each])
            } else if (each == 'text-color') {
                document.querySelector('#show-text-shadow').style.color = text_current_values[each]
            } else {
                new_shadow = new_shadow.concat(text_current_values[each], 'px ')
            }
        }
        document.querySelector("#show-text-shadow").style.textShadow = new_shadow
        document.querySelector('#fill-text-shadow').innerHTML = new_shadow
    })
}