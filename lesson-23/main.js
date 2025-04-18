const burger = document.querySelector('#burger')
const closeTAg = document.querySelector('#close')
const open = document.querySelector('#open')


burger.onclick = () => {
    open.style.display='block'
}
closeTAg.onclick = () => {
    open.style.display='none'
}

