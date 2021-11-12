var preloader  = document.getElementById('loader-wrapper');

setTimeout(() => {
    preloader.style.display = 'none';
}, 2500);

preloader.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);