// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Contact Form
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector('input[placeholder="Name"]');

    // Capitalize the first letter and allow only letters
    nameInput.addEventListener('input', () => {
        nameInput.value = nameInput.value
            .replace(/[^a-zA-Z\s]/g, '')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    });
});

// Donation Form
// Name Input
document.addEventListener('DOMContentLoaded', () => {
    const nameInputs = document.querySelectorAll('#first-name, #last-name');
    const cityInput = document.getElementById('city');

    function allowLettersOnly(inputField) {
        inputField.addEventListener('input', () => {
            inputField.value = inputField.value.replace(/[^a-zA-Z\s]/g, '');
        });
    }

    nameInputs.forEach((input) => allowLettersOnly(input));
    allowLettersOnly(cityInput);
});

// Capitalize First letter
document.addEventListener('DOMContentLoaded', () => {
    const capitalizeInput = (input) => {
        input.value = input.value.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');

    firstName.addEventListener('input', () => capitalizeInput(firstName));
    lastName.addEventListener('input', () => capitalizeInput(lastName));
});

// Submission Confirmation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        const confirmSubmit = confirm('Are you sure you want to submit the form?');
        if (!confirmSubmit) {
            e.preventDefault();
        }
    });
});
