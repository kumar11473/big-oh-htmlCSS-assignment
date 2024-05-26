import loadContent from "../../script.js";
import apiInstance from "../../fetchDataClass.js"; // Make sure you import apiInstance if needed

document.addEventListener("DOMContentLoaded", () => {
  // console.log("DOM ContentLoaded for footer");
  // console.log(apiInstance.total_number_of_fetched_data)
  const offsetDropdown = document.querySelector(".offset-dropdown");
  offsetDropdown.addEventListener("change", handleOffsetChange);


  const prev  = document.querySelector('.prev')
  const next  = document.querySelector('.next')


            // prev button of footer
  prev.addEventListener('click',()=>{
    let current_page= apiInstance.current_page_number || 1
    if(current_page>1){
      current_page--;
      const cardContainer = document.querySelector(".card-container");
      cardContainer.innerHTML = "";
      apiInstance.current_page_number = current_page;
      loadContent(current_page);
    }

  })

            // next button of footer

  next.addEventListener('click',()=>{
    // alert('prv clicked')

    let current_page= apiInstance.current_page_number || 1
    let total_pages = Math.ceil(apiInstance.total_number_of_fetched_data / apiInstance.offset);

    // console.log(apiInstance.total_number_of_fetched_data)

    // console.log("total_pages",total_pages)
    if(current_page<total_pages){
      current_page++;
      const cardContainer = document.querySelector(".card-container");
      cardContainer.innerHTML = "";
      apiInstance.current_page_number = current_page;
      loadContent(current_page);


    }

  })



});

function handleOffsetChange(event) {
  apiInstance.offset = parseInt(event.target.value);
  // loadContent();
  renderFooter(); // Re-render footer when offset changes
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
  loadContent(1);
  // console.log('offset value = ', apiInstance.offset);
  // console.log(apiInstance.total_number_of_fetched_data)
}

function renderFooter() {
  let page_numbers_to_show = Math.ceil(
    apiInstance.total_number_of_fetched_data / apiInstance.offset
  );

  // console.log(apiInstance.total_number_of_fetched_data)
  page_numbers_to_show = Math.min(page_numbers_to_show, 10);

  let ul = document.querySelector(".ul");

  let current_page = apiInstance.current_page_number || 1;
  let total_page = page_numbers_to_show;

  createPages(current_page);

  function createPages(current_page) {
    ul.innerHTML = "";

    for (let i = 1; i <= page_numbers_to_show; i++) {
     
      ul.innerHTML += `<li><a href="#" class="page_number ${
        current_page === i ? "active_page" : ""
      }" data-page="${i}">${i}</a></li>`;
    }

    // Add event listeners to page numbers
    // const pageNumbers = document.querySelector('.page_number'); // give erro
    const pageNumbers = document.querySelectorAll(".page_number");

    pageNumbers.forEach((pageNumber) => {
      pageNumber.addEventListener("click", (e) => {
        e.preventDefault();
        const page = parseInt(e.target.getAttribute("data-page"));

        const cardContainer = document.querySelector(".card-container");
        cardContainer.innerHTML = "";
        apiInstance.current_page_number = page;
        loadContent(page); // Load content for the selected page
      });
    });
  }

  //  const prev = document.querySelector(".prev");
  //     const next = document.querySelector(".next");

  //     // prev.onclick = function () {
  //     //     if (current_page > 1) {
  //     //         // createPages(current_page);
  //     //         const cardContainer = document.querySelector(".card-container");
  //     //         cardContainer.innerHTML=""
  //     //         console.log("current_page")
  //     //         loadContent(current_page); // Load content for the previous page
  //     //         current_page--;
  //     //     }
  //     // }
  //     // prev.style.display = current_page <= 1 ? "none" : "block";

  //     next.addEventListener('click',(e)=>{
  //         e.preventDefault();
  //         // console.log(current_page+"  "+ total_page)
  //         if (current_page < total_page) {
  //             current_page++;
  //             const cardContainer = document.querySelector(".card-container");
  //             cardContainer.innerHTML=""
  //             loadContent(current_page); // Load content for the next page
  //         }
  //     })
  //     next.style.display = current_page >= total_page ? "none" : "block";
}

export default renderFooter;
