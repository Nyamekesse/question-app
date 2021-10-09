const showBtns = document.querySelectorAll('.icon');

showBtns.forEach(item => {
    item.addEventListener('click', (e)=> {
        selection = e.target.parentElement.parentElement.parentElement;
        selection.classList.toggle('show-text');
    });
});
