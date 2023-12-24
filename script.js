document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(window).on('load', function () {
    // Remove the loader once the page is fully loaded
    $('.loader-wrapper').fadeOut('slow');
});