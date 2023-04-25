const ratina1 = document.querySelector('.ratina1');
const ratina2 = document.querySelector('.ratina2');
const container = document.querySelector('.container');
container.addEventListener('mousemove',(e)=>
{
    console.log(e);
    ratina1.style.left = `${(e.clientX /10)-35}%`;
    ratina1.style.top = `${e.clientY /10}%`;
    ratina2.style.left = `${(e.clientX /10)-35}%`;
    ratina2.style.top = `${e.clientY /10}%`;
})