function openNav(){
    document.getElementById("mySidebar").style.width="75%";
    document.body.style.overflow = "hidden"; /*ça permet de faire si le menu est ouvert on ne peut plus defiler */

}
function closeNav(){
    document.getElementById("mySidebar").style.width="0";
    document.body.style.overflow= "auto"; /*ça permet de faire si le menu est ouvert on ne peut plus defiler */

}