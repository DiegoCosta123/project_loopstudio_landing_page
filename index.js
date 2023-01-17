let project_container = window.document.getElementById("project_container");
let btnMenu = window.document.getElementById("icon_menu");
let btnClose = window.document.getElementById("menu_close");
let popUp = window.document.getElementById("#menu_popup");

function menu() {
    const modal = document.createElement("div"); // crio a div dinamicamente

    modal.id = 'menu_popup'; // dou um ID para essa div criada (é a mesma div do seu estilo para o modal)
    modal.innerHTML =
        `
                        <div class="title_close">
                            <h1 id="title_menu_popup">loopstudios</h1>
                            <img id="menu_close" src="images/icon-close.svg" onclick="closeModal()" />
                        </div>

                        <div id="buttons_option_popup">
                            <a href="" class="btn_menu_popup">About</a>
                            <a href="" class="btn_menu_popup">Careers</a>
                            <a href="" class="btn_menu_popup">Events</a>
                            <a href="" class="btn_menu_popup">Products</a>
                            <a href="" class="btn_menu_popup">Support</a>
                        </div>
                    ` // crio o conteúdo HTML 
    project_container.appendChild(modal); // eu insiro essa dentro do project_container
}

function closeModal() {
    document.getElementById("menu_popup").remove(); //removo o elemento
}

