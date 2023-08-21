const btnOpenPopup = document.getElementById('btn-open-popup'),
    btnOpenPopup2 = document.getElementById('btn-open-popup2'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnClosePopup = document.getElementById('btn-close-popup');
    btnClosePopup2 = document.getElementById('btn-close-popup2');

btnOpenPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    document.querySelector('body').classList.add('noscroll-class') 
});

btnOpenPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
    document.querySelector('body').classList.add('noscroll-class') 
});

btnClosePopup.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
    document.querySelector('body').classList.remove('noscroll-class') 
});

btnClosePopup2.addEventListener('click', (e) => {
    e.preventDefault();
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
    document.querySelector('body').classList.remove('noscroll-class') 
})