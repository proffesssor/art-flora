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