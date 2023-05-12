/* Variables */
const listHeaders = document.querySelectorAll(".topic_header");
const menuBtn = document.querySelector(".menu_icon");
const menu = document.querySelector(".menu");

/* Events */
for(const header of listHeaders) {
    header.addEventListener("click", () => {
        showList(header);
    });
}
menuBtn.addEventListener("click", () => {
    showMenu(menuBtn);
});


/* Functions */
function showList(header) {
    //variables
    const list = header.parentElement.querySelector(".topic_list");
    const arrow = header.querySelector(".header_arrow");
    const name = header.querySelector(".header_type");
    //transition
    list.style.transition = "all .5s ease";
    arrow.style.transition = "all .5s ease";
    name.style.transition = "all .5s ease";
    //status
    if(list.getAttribute("id") === "showList") {
        list.setAttribute("id", "");
        arrow.setAttribute("id", "");
        name.setAttribute("id", "");
    } else {
        list.setAttribute("id", "showList");
        arrow.setAttribute("id", "arrowUp");
        name.setAttribute("id", "listOpen");
    }
}

function showMenu(menuBtn) {
    const btnImg = menuBtn.querySelector(".icons");
    btnImg.style.transition = "all .5s linear";
    menu.style.transition = "all 1s linear";
    if(menu.getAttribute("id") === "showMenu") {
        menu.setAttribute("id", "");
        btnImg.setAttribute("id", "");
    } else {
        menu.setAttribute("id", "showMenu");
        btnImg.setAttribute("id", "menuOpen");
    }
}