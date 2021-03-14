// https://type.fit/api/quotes

let apiQuotes = [];

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
}

async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.error(error);
    }
}

// Quando carregar a página - On Load
getQuotes();