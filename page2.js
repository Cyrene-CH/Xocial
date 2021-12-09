const container = document.querySelector('.image-container')

let mousePressed = false
let x = 0
window.addEventListener('mousedown', function (e) {
    x = e.x
    mousePressed = true
})
window.addEventListener('mousemove', function (e) {

    let dis = e.x - x
    container.scrollBy(dis, 0)
    x = e.x
})
window.addEventListener('mouseup', function (e) {
    mousePressed = false
    x = e.x
})