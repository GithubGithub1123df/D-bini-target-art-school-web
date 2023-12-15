let links = document.querySelectorAll(".navigation li");

links.forEach(link =>{
    link.addEventListener("click",function(){
        links.forEach((link)=>{
            link.classList.remove("nav_open");
            this.classList.add("nav_open");
        })
    })
})

let anchors = document.querySelectorAll(".navigation a");
anchors.forEach(anchor =>{
    anchor.addEventListener("click", function(event){
        event.preventDefault();

        let hrefs = anchor.getAttribute("href");
        let sections = document.querySelectorAll("section");

        sections.forEach(section =>{
            section.classList.remove("active");
        })

        let selected = document.querySelector(hrefs);
        selected.classList.add("active");
    })
})
// let drop_anchors = document.querySelectorAll("#dropdown a");
// drop_anchors.forEach(drop_anchor => {
//     drop_anchor.addEventListener("click", function(){
//         let hrefs = drop_anchor.getAttribute("href");
//         let divs = document.querySelectorAll("nav div");

//         divs.forEach(div => {
//             div.classList.remove("active");
//         })

//         let selected_div = document.querySelector(hrefs);
//         selected_div.classList.add("active");
//     })
// })
// document.getElementsByClassName("drop")[0].onclick = function(){
//     document.getElementsByClassName("drop")[0].style.background = "fa-solid fa-x";
// }