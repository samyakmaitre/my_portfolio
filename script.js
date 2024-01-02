// Remove loader once the page is fully loaded
$(window).on('load', function () {
    $('.loader-wrapper').fadeOut('slow');
});


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Display the file name for file input
function displayFileName(input) {
    const label = document.querySelector('label[for="attachment"]');
    const fileStatusLabel = document.getElementById('fileStatusLabel');

    if (input.files.length > 0) {
        label.innerHTML = `Attachment: ${input.files[0].name}`;
        fileStatusLabel.style.display = 'none'; // Hide "No file chosen" text
    } else {
        label.innerHTML = 'Add an Attachment';
        fileStatusLabel.style.display = 'inline'; // Show "No file chosen" text
    }
}

// Disable paste on input fields with the class 'no-paste'
const noPasteInputs = document.querySelectorAll('.no-paste');

noPasteInputs.forEach(function (input) {
    input.addEventListener('paste', function (event) {
        event.preventDefault();
    });
});





//









