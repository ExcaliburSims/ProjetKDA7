(()=>{
    const infoSection=document.querySelector(".section__infos");
    const tabConteneur=document.querySelector(".tab--competence");

    tabConteneur.addEventListener("click",function(e){
        if(e.target.classList.contains("tab--element")&&
        !e.target.classList.contains("active")){
            const target=e.target.getAttribute("data-objetif");

            tabConteneur.querySelector(".active").classList.remove("--ombreExterieure","active");

            e.target.classList.add("active","--ombreExterieure");

            infoSection.querySelector(".tab--contenu.active").classList.remove("active");

            infoSection.querySelector(target).classList.add(active);
        }
    })
})
