var preloader  = document.getElementById('loader-wrapper');

setTimeout(() => {
    preloader.style.display = 'none';
}, 3000);

preloader.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);