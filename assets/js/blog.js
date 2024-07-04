// Dark Mode Setting
const dkCard = document.querySelector('.dkcard');
const dkH2 = document.querySelector('.dkh2');
const dkFooter = document.querySelector('.dkfooter');

modeEl.addEventListener('click', function() {
    dkCard.classList.toggle('dark-card');
    dkH2.classList.toggle('dark-h2');
    dkFooter.classList.toggle('dark-footer');
});


// back button needed

// Pull in form submissions and create elements

const blogTitle = document.getElementById('blog-title');
const blogContent = document.getElementById('blog-content');
const blogAuthor = document.getElementById('blog-author');

console.log(blogTitle);
console.log(blogContent);
console.log(blogAuthor);



// view list of blog posts pulled from local storage
// Got help with how to display the array of abjects on page from class instructor
for (let i = 0; i < blogArray.length; i++) {
    const  blogCard = document.createElement("div");
    blogCard.setAttribute("class", "card");

  // each blog entry on page shows title, content, author
    const blogTitleH2 = document.createElement("h2");
    blogTitleH2.textContent = blogArray[i].blogTitle;
    blogCard.append(blogTitleH2);

    const blogContentP = document.createElement("p");
    blogContentP.textContent = blogArray[i].blogContent;
    blogCard.append(blogContentP);

    const blogAuthorP = document.createElement("p");
    blogAuthorP.textContent = blogArray[i].blogAuthor;
    blogCard.append(blogAuthorP);

}

