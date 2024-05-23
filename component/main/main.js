import apiInstance from "../../fetchDataClass.js";
// import loadContent from "../../script";

import showCards from "../card/card.js";
import renderFooter from "../footer/footer.js";


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    async function loadQueryContent(searchValue){
        const data=await apiInstance.getQueryData(searchValue);
        console.log(data)

        const cardContainer = document.querySelector(".card-container");
        cardContainer.innerHTML=""
        apiInstance.total_number_of_fetched_data=data.total
        renderFooter
        showCards(data.products);


    }

    // Add an onclick listener to the search button
    searchButton.addEventListener('click', () => {
        
        let searchValue = searchInput.value;
        if(searchValue.length===0|| searchValue==null){
            alert('Enter valid input ')
        }
      
        // Perform the search action here
        loadQueryContent(searchValue);
        
        // showData(data);
    });

    // Optional: Add 'Enter' key listener for the search input
    // searchInput.addEventListener('keypress', (e) => {
    //     if (e.key === 'Enter') {
    //         const searchValue = searchInput.value;
    //         console.log('Search Value:', searchValue);

    //         // Perform the search action here
    //         loadContent(searchValue);
    //     }
    // });
});

// function performSearch(query) {
//     // Replace this with your actual search logic
//     console.log('Performing search for:', query);
//     // You can make an API call, filter data, etc.
//     // For example, to call an API:
//     // apiInstance.getData({ search: query }).then(data => {
//     //     console.log(data);
//     //     // Display search results
//     //     showCards(data.products);
//     // });
// }
