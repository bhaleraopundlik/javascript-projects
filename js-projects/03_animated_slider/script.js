const panels = document.querySelectorAll('.panel');
debugger
panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeingActiveClass();
        panel.classList.add('active')
    })
})
function removeingActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}