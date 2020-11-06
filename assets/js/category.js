function showCategory(category) {

    const container = document.querySelector('#side-menu')
    if (category == 'none') {
        container.style.display = 'none'
    } else {
        container.style.display = 'inline'
        for (let child of container.children) {
            if (child.id == category) {
                child.style.display = 'block'
            }
            else {
                child.style.display = 'none'
            }
        }
    }
}