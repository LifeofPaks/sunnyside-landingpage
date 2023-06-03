const navLinks = document.querySelector('.navLinks')
const navEdge = document.querySelector('.navEdge')
const menuOpen = document.querySelector('.menuOpen')

menuOpen.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    navEdge.classList.toggle('active')
})