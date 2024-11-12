// Add listeners for mouseover and mouseleave
const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Add listeners for focus and blur
const figures = document.querySelectorAll('figure');
figures.forEach(figure => {
    figure.addEventListener('focus', () => {
        figure.style.border = '2px solid blue';
    });

    figure.addEventListener('blur', () => {
        figure.style.border = '2px solid #ccc';
    });
});

// Add listener for onload event
window.addEventListener('load', () => {
    console.log("Page is fully loaded.");
});

// Function to add tabindex attribute to each figure
function addTabIndex() {
    const figures = document.querySelectorAll('figure');
    figures.forEach(figure => {
        figure.setAttribute('tabindex', '0');
    });
}

// Call the function to add tabindex
addTabIndex();

// Console log message to confirm tabIndex addition
console.log("Tabindex added to figures.");
