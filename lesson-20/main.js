// const p = document.querySelector('.p-one');
// const p = document.getElementById('p-one');



// const p = document.getElementsByClassName('p-one');
// console.log(p.className);
// console.log(p.innerHTML);
// console.log(p.innerText);
// console.log(p.textContent);











const h1 = document.querySelector('h1')
const btns = document.querySelectorAll('button')


let count = 0;


btns[0].onclick = () => {
    h1.innerText = count--;
    h1.style.color = 'red'
}

btns[1].onclick = () => {
    h1.innerText = count++;
    h1.style.color = 'blue'
}

btns[2].onclick = () => {
    h1.innerText = count = 0;
    h1.style.color = 'black'
}

























