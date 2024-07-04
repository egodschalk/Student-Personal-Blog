// Dark Mode Settings
const dkForm = document.querySelector('.dkform');
const dkSubmit = document.querySelector('.dksubmit');

modeEl.addEventListener('click', function() {   
    dkForm.classList.toggle('dark-form');
    dkSubmit.classList.toggle('dark-submit');
});


// require all fields for form submission, otherwise pop-up prompt to complete form

// store blog post data to local storage
// 1. pull in submitted form data as elements
const form = document.querySelector('#form');

// got help with the array code from class TA
let blogArray = JSON.parse(localStorage.getItem('blogPost'));

if (!blogArray) {
    blogArray = []
}
console.log("blogArray: ", blogArray);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const blogAuthor = document.querySelector('#username').value;
    const blogTitle = document.querySelector('#title').value;
    const blogContent = document.querySelector('#content').value;

// 2. create an object of those elements
const blogPost = {
    blogAuthor: blogAuthor,
    blogTitle: blogTitle,
    blogContent: blogContent,
};

blogArray.push(blogPost);

// 3. save object to local storage
localStorage.setItem('blogPost', JSON.stringify(blogArray));

window.location.href = "./blog.html"

});

