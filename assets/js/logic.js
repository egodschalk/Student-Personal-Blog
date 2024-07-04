// when user clicks on the sun/moon button. If in lt mode, switch to dk mode, if in dk mode, switch to lt mode
// Grab ref to html from button
const modeEl = document.getElementById('mode');
const dkBody = document.querySelector('.dkbody');
const dkHeader = document.querySelector('.dkheader');
const dkButton = document.querySelector('.dkbutton');

// Switch  between modes (switch between 2 css classes)
// classList.toggle properties taken from learning assistant
modeEl.addEventListener('click', function() {
    dkBody.classList.toggle('dark-body');
    dkHeader.classList.toggle('dark-header');
    dkButton.classList.toggle('dark-btn');
});


// Remember mode preference (local storage, do later)