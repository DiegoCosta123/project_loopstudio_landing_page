let btnMenu = window.document.getElementById("icon_menu");
let btnClose = window.document.getElementById("menu_close");
let popUp = window.document.getElementById("menu_popup");

function menu() {
    if (popUp) {
        popUp.style.display = "block";
    }
}

function closeModal() {
    popUp.style.display = "none";
}

