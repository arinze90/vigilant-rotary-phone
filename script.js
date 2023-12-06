const hamburger = document.querySelector('.icon')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', ()=> {
    nav.classList.toggle('visible')
}
)