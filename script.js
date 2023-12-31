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

// Assuming noPasteInputs is defined as an array of input elements
const noPasteInputs = document.querySelectorAll('.no-paste');

noPasteInputs.forEach(function (input) {
    input.addEventListener('option', function (event) {
        event.preventDefault();
    });
});