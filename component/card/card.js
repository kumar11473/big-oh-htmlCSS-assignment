const showCards = async (cardData) => {
    console.log("called showcards");
    console.log(cardData);
    
    const cardContainer = document.querySelector(".card-container");
    if (cardData) {
        cardData.map((data) => {
            const cards = document.createElement("div");
            cards.classList.add("card");

            // Check if the item is already in the favorites list
            const status = window.localStorage.getItem(data.id);
            // initial value set kro 
            const favIconClass = status === null ? "fa-regular fa-heart" : "fa-solid fa-heart";
            const favIconStyle = status === null ? "" : "color: #d81818;";

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
                const status = window.localStorage.getItem(data.id);
                const icon = favIcon.querySelector('i');
                if (status === null) {
                    console.log(data.id, "added to fav");
                    window.localStorage.setItem(data.id, true);
                    icon.className = "fa-solid fa-heart";
                    icon.style.color = "#d81818";
                } else {
                    console.log(data.id, "removed from fav");
                    window.localStorage.removeItem(data.id);
                    icon.className = "fa-regular fa-heart";
                    icon.style.color = "";
                }
            });
        });
    }
};

export default showCards;


// const cardDatas= [
//         {
//             "id": 1,
//             "title": "iPhone 9",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 549,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//             "images": [
//                 "https://cdn.dummyjson.com/product-images/1/1.jpg",
//                 "https://cdn.dummyjson.com/product-images/1/2.jpg",
//                 "https://cdn.dummyjson.com/product-images/1/3.jpg",
//                 "https://cdn.dummyjson.com/product-images/1/4.jpg",
//                 "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//             ]
//         },
//         {
//             "id": 2,
//             "title": "iPhone X",
//             "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//             "price": 899,
//             "discountPercentage": 17.94,
//             "rating": 4.44,
//             "stock": 34,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
//             "images": [
//                 "https://cdn.dummyjson.com/product-images/2/1.jpg",
//                 "https://cdn.dummyjson.com/product-images/2/2.jpg",
//                 "https://cdn.dummyjson.com/product-images/2/3.jpg",
//                 "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
//             ]
//         },
//         {
//             "id": 3,
//             "title": "Samsung Universe 9",
//             "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
//             "price": 1249,
//             "discountPercentage": 15.46,
//             "rating": 4.09,
//             "stock": 36,
//             "brand": "Samsung",
//             "category": "smartphones",
//             "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
//             "images": [
//                 "https://cdn.dummyjson.com/product-images/3/1.jpg"
//             ]
//         },
//         {
//             "id": 4,
//             "title": "OPPOF19",
//             "description": "OPPO F19 is officially announced on April 2021.",
//             "price": 280,
//             "discountPercentage": 17.91,
//             "rating": 4.3,
//             "stock": 123,
//             "brand": "OPPO",
//             "category": "smartphones",
//             "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
//             "images": [
//                 "https://cdn.dummyjson.com/product-images/4/1.jpg",
//                 "https://cdn.dummyjson.com/product-images/4/2.jpg",
//                 "https://cdn.dummyjson.com/product-images/4/3.jpg",
//                 "https://cdn.dummyjson.com/product-images/4/4.jpg",
//                 "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
//             ]
//         },
//         {
//             "id": 5,
//             "title": "Huawei P30",
//             "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//             "price": 499,
//             "discountPercentage": 10.58,
//             "rating": 4.09,
//             "stock": 32,
//             "brand": "Huawei",
//             "category": "smartphones",
//             "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
//             "images": [
//                 "https://cdn.dummyjson.com/product-images/5/1.jpg",
//                 "https://cdn.dummyjson.com/product-images/5/2.jpg",
//                 "https://cdn.dummyjson.com/product-images/5/3.jpg"
//             ]
//         },
//         {
//             "id": 5,
//             "title": "Huawei P30",
//             "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//             "price": 499,
//             "discountPercentage": 10.58,
//             "rating": 4.09,
//             "stock": 32,
//             "brand": "Huawei",
//             "category": "smartphones",
//             "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
//             "images": [
//                 "https://cdn.dummyjson.com/product-images/5/1.jpg",
//                 "https://cdn.dummyjson.com/product-images/5/2.jpg",
//                 "https://cdn.dummyjson.com/product-images/5/3.jpg"
//             ]
//         }

//     ]
