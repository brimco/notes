function showCategory(category) {
    const side_menu = document.querySelector('#side-menu')

    // unselect all categories
    document.querySelectorAll('.selected').forEach(btn => {
        btn.classList.remove('selected')
    })

    if (category == 'none') {
        hideSidebar()
    } else {
        showSidebar()

        // show links for selected category only
        for (let child of side_menu.children) {
            if (child.id == category) {
                child.style.display = 'block'
            } else if (child.id != 'close-sidebar') {
                child.style.display = 'none'
            }
        }

        // select the right category
        for (let child of document.querySelector('#category-header').children) {
            if (child.innerHTML.toLowerCase() == category) {
                child.classList.add('selected')
            }
        }
    }
}

function hideSidebar() {
    const side_menu = document.querySelector('#side-menu')
    side_menu.style.width = '0'
    side_menu.style.padding = '0'
}

function showSidebar() {
    const side_menu = document.querySelector('#side-menu')
    side_menu.style.width = '250px'
    side_menu.style.padding = '1em'
}

function toggleSidebar() {
    console.log('toggle')
    const side_menu = document.querySelector('#side-menu')
    if (side_menu.style.width == '250px') {
        console.log('hide')
        hideSidebar()
    } else {
        console.log('show')
        showSidebar()
    }
}