// class CustomFooter extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });
//         this.shadowRoot.innerHTML = `
//         <link rel="stylesheet" href="./component/footer/footer.css">
             
//         `;
//     }

//     connectedCallback() {
        // this.shadowRoot.getElementById('searchButton').addEventListener('click', () => this.search());
        // this.shadowRoot.getElementById('sortDropdown').addEventListener('change', () => this.sort());
        // this.shadowRoot.getElementById('favoriteIcon').addEventListener('click', () => this.navigateToFavorites());
        
        // search() {
            //     const query = this.shadowRoot.getElementById('searchInput').value;
            //     console.log(`Searching for: ${query}`);
            //     // Implement your search functionality here
            // }
            
            // sort() {
                //     const sortOrder = this.shadowRoot.getElementById('sortDropdown').value;
                //     console.log(`Sorting order: ${sortOrder}`);
                //     // Implement your sorting functionality here
                // }
                
                // navigateToFavorites() {
                    //     window.location.href = 'favorites.html';
                    // }
                    
                // }
                    // --------------------------------------
                    
                    
                  
    // -------------------------------------------



// }

// customElements.define('custom-footer', CustomFooter);


let ul = document.querySelector(".ul");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let current_page = 1;
let total_page = 10;
let active_page = 1;

create_pages(current_page);

function create_pages(current_page) {
        ul.innerHTML = "";

        let before_page = current_page - 2;
        let after_page = current_page + 2;

        if(current_page == 2){
            before_page = current_page - 1;
        }
        if(current_page == 1){
            before_page = current_page;
        }

        if(current_page == total_page - 1){
            after_page = current_page + 1;
        }
        if(current_page == total_page){
            after_page = current_page;
        }

        for (let i = before_page; i <= after_page; i++) {
                if (current_page == i) {
                    active_page = "active_page";
                } else {
                    active_page = "";
                }
                ul.innerHTML += `<li onclick="create_pages(` + i + `)"><a href="#" class="page_number ` + active_page + `">` + i + `</a></li>`;

        }

        // Next and Previous Button Functionality.

        prev.onclick = function () {
            current_page--;
            create_pages(current_page);
        }
        if(current_page <= 1){
            prev.style.display = "none";
        }else{
            prev.style.display = "block";
        }

        next.onclick = function () {
            current_page++;
            create_pages(current_page);
        }
        if(current_page >= total_page){
            next.style.display = "none";
        }else{
            next.style.display = "block";
        }

}