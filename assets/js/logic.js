// when user clicks on the sun/moon button. If in lt mode, switch to dk mode, if in dk mode, switch to lt mode
// 1. grab ref to html from button
// const modeEl = document.querySelector(".mode");

// 2. way to switch modes- switch between 2 css classes
document.body.classList.toggle('dark-mode');


// 3. remember mode preference (local storage, do later)