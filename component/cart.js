// import showCards from "./card/card";
// import apiInstance from "../fetchDataClass.js";

document.addEventListener('DOMContentLoaded',()=>{
    const favIcon=document.getElementById('favoriteIcon');
    console.log('inside cart.js')
    favIcon.addEventListener('click',()=>{
    //    alert('fav btn clicked')
        window.location.href = 'http://127.0.0.1:5500/cart';
        // const favItemIds = JSON.parse(window.localStorage.getItem('fav'));
        // const data = favItemIds.map((id)=>{
        //     return apiInstance.getDataFromId(id)
        // })
        // console.log( " fav data",data)
        // showCards(data);
    })
})