const button = document.querySelector('button')
const body = document.querySelector('body')

const color = ['pink', 'orangr', 'green', 'black']

function clr(){
    const index = parseInt(Math.random() * color.length)
    body.style.backgroundColor = color[index]
}

body.style.backgroundColor = 'pink';
button.addEventListener('click',clr)

