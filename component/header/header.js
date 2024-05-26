// window.addEventListener('DOMContentLoaded',()=>{
//   const header = document.querySelector('#')
// })

// class CustomSearch extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.innerHTML = `
        
//             <div class="search-bar">
//                 <select id="sortDropdown">
//                     <option value="asc">Ascending</option>
//                     <option value="desc">Descending</option>
//                 </select>
//                 <input type="text" id="searchInput" placeholder="Search...">
//                 <button id="searchButton">Search</button>
//                 <span id="favoriteIcon">❤️</span>
//             </div>
//         `;
//   }

//   connectedCallback() {
//     // this.shadowRoot.getElementById('searchButton').addEventListener('click', () => this.search());
//     // this.shadowRoot.getElementById('sortDropdown').addEventListener('change', () => this.sort());
//     // this.shadowRoot.getElementById('favoriteIcon').addEventListener('click', () => this.navigateToFavorites());
//   //   this.shadowRoot
//   //     .getElementById("favoriteIcon")
//   //     .addEventListener("click", () => {
//   //       console.log("clicked fav cart");
//   //     });
//   }

//   // search() {
//   //     const query = this.shadowRoot.getElementById('searchInput').value;
//   //     console.log(`Searching for: ${query}`);
//   //     // Implement your search functionality here
//   // }

//   // sort() {
//   //     const sortOrder = this.shadowRoot.getElementById('sortDropdown').value;
//   //     console.log(`Sorting order: ${sortOrder}`);
//   //     // Implement your sorting functionality here
//   // }

//   // navigateToFavorites() {
//   //   console.log("clicked on fav cart ");
//   //   window.location.href = "favorites.html";
//   // }
// }

// customElements.define("custom-search", CustomSearch);
