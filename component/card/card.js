const showCards = async (cardData) => {
  // console.log("called showcards");
  console.log(cardData);

  const cardContainer = document.querySelector(".card-container");
  let favItemIds = JSON.parse(window.localStorage.getItem("fav")) || [];

  
  // console.log("fav item id",favItemIds)
  if (cardData) {
    cardData.map((data) => {
      const cards = document.createElement("div");
      cards.classList.add("card");

      // Checking if the item is already in the favorites list

      const status = favItemIds.includes(data.id);
    
      // initial value set kro

      const favIconClass = status === false ? "fa-regular fa-heart" : "fa-solid fa-heart";
      const favIconStyle = status === false ? "" : "color: #d81818;";

      cards.innerHTML = `
                <div class="container">
                    <div class="product-card">
                        <img src="${data.images[0]}" alt="${data.title}" class="product-image">
                        <div class="product-details">
                            <h2 class="product-title">${data.title}</h2>
                            <p class="product-description">${data.description}</p>
                            <p class="product-price">$${data.price}</p>
                            <p class="product-discount">Discount: ${data.discountPercentage}%</p>
                            <p class="product-rating">Rating: ${data.rating}</p>
                            <p class="product-brand">Brand: ${data.brand}</p>
                        </div>
                        <span class="add-to-fav-icon">
                            <i class="${favIconClass}" style="${favIconStyle}"></i>
                        </span>
                    </div>
                </div>
            `;
      
      cardContainer.appendChild(cards);

      const favIcon = cards.querySelector(".add-to-fav-icon");
      
      favIcon.addEventListener("click", () => {
        // if we store key=id and value=true/false then we can't iterate over all the ids stored (no method present) in cart.js
        // so I'll use  key = 'fav' and 'array' as value
        //  const status = window.localStorage.getItem(data.id);
        const status = favItemIds.includes(data.id);

        const icon = favIcon.querySelector("i");
        if (status === false) {
          console.log(data.id, "added to fav");
          favItemIds.push(data.id);

          window.localStorage.setItem("fav", JSON.stringify(favItemIds));
          icon.className = "fa-solid fa-heart";
          icon.style.color = "#d81818";
        } else {
          favItemIds = favItemIds.filter((ids) => ids !== data.id);
          console.log(data.id, "removed from fav");
          
          window.localStorage.setItem("fav", JSON.stringify(favItemIds));
          icon.className = "fa-regular fa-heart";
          icon.style.color = "";
        }
      });
    });
  }
};

export default showCards;
