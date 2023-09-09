document.querySelectorAll('.projects__img').forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        if (!item.querySelector('.projects__subtitle')){
            item.querySelector('.projects__popup').classList.remove('none');
            let query = `<p class="projects__subtitle">${item.querySelector('img').getAttribute('alt')}</p>`
            item.querySelector('.projects__popup').insertAdjacentHTML('beforeend', query);
        } else {
            item.addEventListener('mouseout', ()=>{
                item.querySelector('.projects__popup').innerHTML = '';
                item.querySelector('.projects__popup').classList.add('none');
            })
        }
    });
});

const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavButton.addEventListener("click", function(){
    mobileNavButton.classList.toggle('active');
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

document.querySelector('.mobile-nav-list').querySelectorAll('a').forEach(item =>{
    item.addEventListener('click', ()=>{
        mobileNavButton.classList.toggle('active');
        mobileNavIcon.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});