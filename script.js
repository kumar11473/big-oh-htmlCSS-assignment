import apiInstance from "./uti/fetchDataClass.js";
import showCards from "./component/card/card.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ContentLoaddedd")
    //   let offset = 10;
      let skip =1;
      let limit = 5;

      let loading = false;
    
      // Initial load
      loadMoreContent();
    
      // Event listener for scrolling
      window.addEventListener("scroll", () => {
        if (
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50 &&
          !loading
        ) {
          loadMoreContent();
          console.log("reached bottom")
        }
      });
    
      async function loadMoreContent() {
        loading = true;
        
        try {
          const data = await apiInstance.getData({ limit, skip });

        showCards(data.products);

          skip += limit;

        } catch (error) {
          console.error("Error loading more content:", error);
        } finally {
          loading = false;
          // loadingDiv.style.display = 'none';
        }
      }
    
    console.log("iside script.js ")
    });
    



















// class CustomSearch extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });
//         this.shadowRoot.innerHTML = `
//             <div class="search-bar">
//                 <input type="text" id="searchInput" placeholder="Search...">
//                 <button id="searchButton">Search</button>
//                 <select id="sortDropdown">
//                     <option value="asc">Ascending</option>
//                     <option value="desc">Descending</option>
//                 </select>
//                 <span id="favoriteIcon">❤️</span>
//             </div>
//         `;
//     }

//     connectedCallback() {
//         this.shadowRoot.getElementById('searchButton').addEventListener('click', () => this.search());
//         this.shadowRoot.getElementById('sortDropdown').addEventListener('change', () => this.sort());
//         this.shadowRoot.getElementById('favoriteIcon').addEventListener('click', () => this.navigateToFavorites());
//     }

//     search() {
//         const query = this.shadowRoot.getElementById('searchInput').value;
//         console.log(`Searching for: ${query}`);
//         // Implement your search functionality here
//     }

//     sort() {
//         const sortOrder = this.shadowRoot.getElementById('sortDropdown').value;
//         console.log(`Sorting order: ${sortOrder}`);
//         // Implement your sorting functionality here
//     }

//     navigateToFavorites() {
//         window.location.href = 'favorites.html';
//     }
// }

// customElements.define('custom-search', CustomSearch);
