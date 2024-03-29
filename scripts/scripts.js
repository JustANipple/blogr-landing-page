/* Variables */
const listHeaders = document.querySelectorAll(".topic_header");
const menuBtn = document.querySelector(".menu_icon");
const menu = document.querySelector(".menu");
const signUp = document.querySelector(".user_signup");
const start = document.querySelector(".btn_start");
const learn = document.querySelector(".btn_learn");

/* Transitions */
signUp.style.transition = "all .5s ease-in-out";
start.style.transition = "all .5s ease-in-out";
learn.style.transition = "all .5s ease-in-out";

/* Events */
for(const header of listHeaders) {
    header.addEventListener("click", () => {
        closeLists(header);
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
    btnImg.style.transition = "all .25s linear";
    menu.style.transition = "all .25s linear";
    if(menu.getAttribute("id") === "showMenu") {
        menu.setAttribute("id", "");
        btnImg.setAttribute("id", "");
    } else {
        menu.setAttribute("id", "showMenu");
        btnImg.setAttribute("id", "menuOpen");
    }
}

function closeLists(obj) {
    for(const header of listHeaders) {
        if(header !== obj) {
            const list = header.parentElement.querySelector(".topic_list");
            const arrow = header.querySelector(".header_arrow");
            const name = header.querySelector(".header_type");
            list.setAttribute("id", "");
            arrow.setAttribute("id", "");
            name.setAttribute("id", "");
        }
    }
}