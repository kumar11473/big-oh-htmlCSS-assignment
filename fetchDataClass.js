class FetchData {
  // 'https://dummyjson.com/products?limit=10&skip=10&select=title,price
  constructor() {
    this.baseURL = "https://dummyjson.com/products";
    this.cache = {};
    this.total_number_of_fetched_data = -1;
    this.skip = 0;
    this.offset = 10; // change this as per selected offet in footer.js
    this.current_page_number = 1;

    // the value in localStorage is always in string data type so stringfy the array  before storing .
    // const fav=[]
    // window.localStorage.setItem('fav',JSON.stringify(fav))
  }

  async getData(pageNumber = 1) {
    // now getData method should not requier any parameter
    const params = {};

    params.skip = parseInt((pageNumber - 1) * this.offset);
    params.limit = parseInt(this.offset); // offset ka mtlb ek page me kitna data chaghiye

    const queryString = new URLSearchParams(params).toString();
    // console.log("inside get data method")
    /*
        ager mai page number of cache karu or offset different ho to data kam jyada aane lagenge
        isliye pure k pure url ko hi ho cache kr do
        */

    const url = `${this.baseURL}?${queryString}`;
    console.log(url);
    if (this.cache[url]) {
      console.log("Returning cached data");
      return Promise.resolve(this.cache[url]);
    }

    console.log("Fetching new data from API");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      this.cache[url] = data;
      // console.log('above return ')

      // use this variable to calculate total number of pages we will render in pagination
    
      this.total_number_of_fetched_data = data.total;
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  // getData method for search query
  async getQueryData(query = "") {
    try {
      // https://dummyjson.com/products/search?q=phone
      const url = `${this.baseURL}/search?q=${query}`;
      // console.log(url)
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // use this variable to calculate total number of pages we will render in pagination
        this.total_number_of_fetched_data = data.total;
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getDataFromId(id = 0) {
    try {
      // https://dummyjson.com/products/search?q=phone
      // 'https://dummyjson.com/products/1'
      const url = `${this.baseURL}/${parseInt(id)}`;
      // console.log(url)
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // use this variable to calculate total number of pages we will render in pagination
        // this.total_number_of_fetched_data=data.total
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  clearCache() {
    this.cache = {};
  }

  clearCacheForEndpoint(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = `${this.baseURL}${endpoint}?${queryString}`;
    delete this.cache[url];
  }
}

const apiInstance = new FetchData();

// const para={
//     limit:10,
//     skip:10
// }

// async function fetchData (){
//     try {
//         const data = await apiInstance.getData(para);
//         console.log(data);
//     } catch (error) {

//     }
// }

// fetchData()
// console.log("inside fetch data class")
export default apiInstance;

// export default FetchData;

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
