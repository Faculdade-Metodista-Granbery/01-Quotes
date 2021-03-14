// https://type.fit/api/quotes

let apiQuotes = [];

async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        console.error(error);
    }
}

// Quando carregar a página - On Load
getQuotes();