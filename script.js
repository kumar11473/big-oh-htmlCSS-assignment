import apiInstance from "./fetchDataClass.js";
import showCards from "./component/card/card.js";
import renderFooter from "./component/footer/footer.js";


let loading = false;
const loadContent = async(pageNumber)=> {
  loading = true;
  
  try {
    const data = await apiInstance.getData(pageNumber);
    
    showCards(data.products);

  } catch (error) {
    console.error("Error loading more content:", error);
  } finally {
    loading = false;
    
  }
}

document.addEventListener("DOMContentLoaded", () => {
   
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
    
   
      const favIcon = document.querySelector("#favoriteIcon");
    if (favIcon) {
        favIcon.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5500/cart.html";
        });
    }
   
  });

  export default loadContent;
  












