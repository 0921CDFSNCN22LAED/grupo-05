const burguerNav = document.querySelector('#nav-pantalla-mayor');
const burguerButton = document.querySelector('.button_burguer-nav');

burguerButton.addEventListener('click' , () => {
    const burguerClasses = burguerNav.classList;
    console.log(burguerClasses);
    
    for(let clas of burguerClasses){
        if (clas == 'header_visible'){
            console.log('Hello');
            burguerNav.classList.remove('header_visible');
            burguerNav.classList.add('header_not-visible');
            console.log(burguerNav.classList);
        }
        else if (clas == 'header_not-visible'){
            console.log('Hello');
            burguerNav.classList.remove('header_not-visible');
            burguerNav.classList.add('header_visible');

        }
    }
})