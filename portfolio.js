// ----NAVIGATION BAR FUNCTION...//
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    }else{
        menuBtn.className = "nav-menu";
    }
 }


//  ----ADD SHADOW IN NAVIGATION BAR WHILE SCROLLING//
window.onscroll = function(){headerShadow()};

function headershadow(){
    const navHeader =document.getElementById("header");
    if(document.body.scrollTop >50||document.documentElement.scrollTop >50){
        navHeader.style.boxshadow="0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.boxshadow="70px";
    }else{
        navHeader.style.boxshadow="none";
        navHeader.style.height="90px";
        navHeader.style.boxshadow="90px";
    }
}
