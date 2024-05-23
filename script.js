import apiInstance from "./fetchDataClass.js";
import showCards from "./component/card/card.js";
import renderFooter from "./component/footer/footer.js";

// let loadContent=null // declaring loadContent because loadcontent() is declared inside eventListnner and we want to export it.
let loading = false;
const loadContent = async(pageNumber)=> {
  loading = true;
  
  try {
    const data = await apiInstance.getData(pageNumber);
    
    showCards(data.products);
    // console.log(apiInstance.total_number_of_response) //works fine
    // skip += limit;

  } catch (error) {
    console.error("Error loading more content:", error);
  } finally {
    loading = false;
    // loadingDiv.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM ContentLoaddedd for script")
    //   let offset = 10;
  
      const offset = document.querySelector('.offset-dropdown')
      
     
      // Initial load
      loadContent(apiInstance.page_number);
    
      // Event listener for scrolling
      window.addEventListener("scroll", () => {
        if (
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50 &&
          !loading
        ) {
          // loadContent();
          renderFooter()
          // console.log("reached bottom")
        }
      });
    
   
   
  });

  export default loadContent;
  












