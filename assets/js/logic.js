// when user clicks on the sun/moon button. If in lt mode, switch to dk mode, if in dk mode, switch to lt mode
// 1. grab ref to html from button
const modeEl = document.getElementById('mode');
const dkBody = document.querySelector('.dkbody');
const dkHeader = document.querySelector('.dkheader');
const dkButton = document.querySelector('.dkbutton');
const dkForm = document.querySelector('.dkform');
const dkSubmit = document.querySelector('.dksubmit');

// Switch  between modes (switch between 2 css classes)
// classList.toggle properties taken from learning assistant
modeEl.addEventListener('click', function() {
    dkBody.classList.toggle('dark-body');
    dkHeader.classList.toggle('dark-header');
    dkButton.classList.toggle('dark-btn');
    dkForm.classList.toggle('dark-form');
    dkSubmit.classList.toggle('dark-submit');
});


// 3. remember mode preference (local storage, do later)