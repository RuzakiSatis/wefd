let button_one = document.getElementById("button_one");
let windowOne = document.getElementById('windowOne');

button_one.addEventListener('click',() =>{
    windowOne.classList.toggle('active');
})
document.addEventListener('mousedown', function(event){
    let windowOne_block = document.getElementById('windowOne_block');
    if(!windowOne_block.contains(event.target)){
        windowOne.classList.remove('active');
        document.body.style.overflow = 'visible';
    }
})
let img_close = document.getElementById('img_close');
img_close.addEventListener("click", () =>{
    windowOne.classList.remove('active');
    document.body.style.overflow = 'visible';
})

