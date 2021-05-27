
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
sizes


container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

// In
container.addEventListener('mouseenter', e => {
   card.style.transition = 'none';
   // popout
   sneaker.style.transform = 'translateZ(150px) rotateZ(-45deg)';
   title.style.transform = 'translateZ(125px)';
   description.style.transform = 'translateZ(100px)';
   sizes.style.transform = 'translateZ(75px)';
   purchase.style.transform = 'translateZ(50px)';
})


// Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})