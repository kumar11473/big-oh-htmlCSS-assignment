import showCards from "./component/card/card.js";
import apiInstance from "./fetchDataClass.js";

const loadData = async (id) => {
  const data = await apiInstance.getDataFromId(id);
  return data;
};

const mapper = async () => {
  const favItemIds = JSON.parse(window.localStorage.getItem('fav')) || [];
  const dataPromises = favItemIds.map(id => loadData(id));
  const data = await Promise.all(dataPromises);
  return data;
};

document.addEventListener("DOMContentLoaded", async () => {

    try {
        const data = await mapper();
        console.log("fav data", data);
        showCards(data); 
    } catch (error) {
        console.error("Error fetching favorite data:", error);
    }
});



/*



*/