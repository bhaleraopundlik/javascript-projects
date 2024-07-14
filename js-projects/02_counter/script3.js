const counter = document.querySelector('.counter');
const incButton = document.querySelector('.increse-btn');
const decButton = document.querySelector('.decrese-btn');
const resetButton = document.querySelector('.reset-btn');

incButton.addEventListener('click', () => {
    const counterValue = parseInt(counter.innerText)
    counter.innerText = counterValue + 1;
    console.log('counter++')
})

decButton.addEventListener('click', () => {
    const counterValue = parseInt(counter.innerText)
    counter.innerText = counterValue - 1;
    console.log('counter--')
})
resetButton.addEventListener('click', () => {
    counter.innerText = 0;
    console.log('zero')
})



