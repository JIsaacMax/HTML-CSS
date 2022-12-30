function clicar(){
    let a = window.document.getElementById("sanduiche");
    if(a.style.transform == "rotate(90deg)"){
        a.style.transform = "rotate(0deg)";
    }
    else{
        a.style.transform = "rotate(90deg)";
    a.style.transitionDuration = ".4s"
    }
    

}