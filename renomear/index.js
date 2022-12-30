function clicar(){
    let a = window.document.getElementById("sanduiche");
    let b = window.document.querySelector("div.menu-sanduiche");
    if(a.style.transform == "rotate(90deg)"){
        a.style.transform = "rotate(0deg)";
        a.style.right = "10px";
        b.style.display = "none";
    }
    else{
        a.style.transform = "rotate(90deg)";
        a.style.right = "330px";
        a.style.transitionDuration = ".4s"
        b.style.display= "flex"
    }
    

}