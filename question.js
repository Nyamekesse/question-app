const showBtns = document.querySelectorAll('button');

showBtns.forEach(item => {
    item.addEventListener('click', (e)=> {
        const selection = e.currentTarget.parentElement.parentElement;
        selection.classList.toggle('show-text');

        showBtns.forEach(element =>{
            element.addEventListener('click', (e)=> {
                currentParent = e.currentTarget.parentElement.parentElement;
                if (currentParent !== selection) {
                    selection.classList.remove('show-text');
                }
            });
        });
    });
});
