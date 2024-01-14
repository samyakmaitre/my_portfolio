


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



//nav
function toggleNav() {
    var sideNav = document.querySelector('.side-nav');
    sideNav.style.width = sideNav.style.width === '175px' ? '0px' : '175px';
}





//certificate
function openFullScreen(imageId) {
    var modal = document.getElementById('modal');
    var fullScreenImage = document.getElementById('fullScreenImage');
    
    // Set the source of the full-screen image
    fullScreenImage.src = document.getElementById(imageId).src;

    // Display the modal
    modal.style.display = 'block';
}

function closeFullScreen() {
    var modal = document.getElementById('modal');

    // Close the modal
    modal.style.display = 'none';
}




//

