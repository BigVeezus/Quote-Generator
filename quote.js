const quoteText = document.getElementById('text');
const author = document.getElementById('author');
const button = document.getElementById('new-quote')


const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quoteText.innerText = item.content;
        author.innerText = item.author;
      });
};

window.addEventListener("load", getQuote);
button.addEventListener("click", getQuote);



