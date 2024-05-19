


// window.addEventListener('scroll',()=>{

//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-20){
//         // console.log("reacherd bottom of screen") // it will make many api call . how to correct it
//     }

// })



// let currentPage=1;
// let isFetching = false;
// let hasMore=true;

// let root= document.getElementById('root')
// async function fetchData(){
//     isFetching=true
//     let response = await fetch(`${pageNumber}`)
//     let data= await response.json()
//     isFetching = false

//     if(data.length===0){
//         hasMore=false
//         return
//     }

//     for(let post of data){
//         let div=document.createElement('div')
//         div.innerHTML=`<h1> ${post.title}</h1>`
//         root.appendChild(div)
//     }
//     currentPage++;

// }


// window.addEventListener('scroll',()=>{
//     if(isFetching || !hasMore){
//         return
//     }

//     //  offsetHeight read-only property returns the height of an element, including vertical padding and borders,but not the margin as an integer
//     if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
//         console.log("reached at bottom")
//     }
// })