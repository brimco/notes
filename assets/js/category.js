function showCategory(category) {
    const side_menu = document.querySelector('#side-menu')

    document.querySelectorAll('.selected').forEach(btn => {
        btn.classList.remove('selected')
    })

    if (category == 'none') {
        side_menu.style.display = 'none'
    } else {
        side_menu.style.display = 'inline'
        for (let child of side_menu.children) {
            if (child.id == category) {
                child.style.display = 'block'
            }
            else {
                child.style.display = 'none'
            }
        }
        for (let child of document.querySelector('#category-header').children) {
            if (child.innerHTML.toLowerCase() == category) {
                child.classList.add('selected')
            }
        }
    }
}