

/* - - - - - - - - - THEME - - - - - - - -  */



/* - - - - - - - - - NAV - - - - - - - -  */


const links = document.querySelectorAll('.link');

links.forEach(item => {
    item.addEventListener('click', () => {
        links.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
})







/* - - - - - - - - - ACCORDION - - - - - - - -  */



const accordions = document.querySelectorAll('.assinaturas__card');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.assinaturas__card__body');
        body.classList.toggle('active');
    })
})


