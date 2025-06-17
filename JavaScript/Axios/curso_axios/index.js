const nav_mobile = window.document.querySelector("#nav_mobile");
const nav_desktop = window.document.querySelector("#nav_desktop");
const botao_mobile = window.document.querySelector("#botao_mobile");
const menu_hamburguer = window.document.querySelector("#menu_hamburguer");

const container_header_config = window.document.querySelector("#container_header_config");
const container_header = window.document.querySelector("#container_header");
const container_config = window.document.querySelector("#container_config");

let menu_mobile_visible = false;

if(window.innerWidth < 490) {

    nav_desktop.classList.remove('flex');
    nav_desktop.classList.add('hidden');

    nav_mobile.classList.remove('hidden');

    container_header_config.classList.add("flex-col")

} else {

    nav_desktop.classList.remove('hidden');
    nav_desktop.classList.add('flex');

    nav_mobile.classList.add('hidden');

};

if(window.innerWidth < 999) {

    container_header_config.classList.add("flex-col");
    container_config.classList.add("mt-5");
    container_header.classList.remove("me-3");
    container_config.classList.remove("ms-3");


} else {

    container_header_config.classList.remove("flex-col");
    container_config.classList.remove("mt-5");
    container_header.classList.add("me-3");
    container_config.classList.add("ms-3");

}

window.addEventListener("resize", () => {

    if(window.innerWidth < 490) {

        nav_desktop.classList.remove('flex');
        nav_desktop.classList.add('hidden');
    
        nav_mobile.classList.remove('hidden');

        container_header_config.classList.add("flex-col")
    
    } else {
    
        nav_desktop.classList.remove('hidden');
        nav_desktop.classList.add('flex');
    
        nav_mobile.classList.add('hidden');
    
    };

    if(window.innerWidth < 999) {

        container_header_config.classList.add("flex-col");
        container_config.classList.add("mt-5");
        container_header.classList.remove("me-3");
        container_config.classList.remove("ms-3");


    } else {

        container_header_config.classList.remove("flex-col");
        container_config.classList.remove("mt-5");
        container_header.classList.add("me-3");
        container_config.classList.add("ms-3");

    }

});

botao_mobile.addEventListener("click", () => {

    if(menu_mobile_visible) {

        menu_hamburguer.classList.remove("opacity-100");
        menu_hamburguer.classList.add("opacity-0");
    
        setTimeout(() => {

          menu_hamburguer.classList.add("hidden");
          menu_hamburguer.classList.remove("mb-4");
          
        }, 1200);


    } else {

        menu_hamburguer.classList.remove("hidden");
    
        menu_hamburguer.offsetWidth;
    
        menu_hamburguer.classList.remove("opacity-0");
        menu_hamburguer.classList.add("flex", "opacity-100", "mb-4");

    }

    menu_mobile_visible = !menu_mobile_visible;

});

export default {

    nav_mobile,
    nav_desktop,
    botao_mobile,
    menu_hamburguer,
    container_header_config,
    container_header,
    container_config,
    menu_mobile_visible

}