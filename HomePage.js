myitem = document.getElementById("firstsite");
    myitem.addEventListener("click", onClick);
    myitem.addEventListener("mouseout", onMouseOut);
    function onClick() {  
        myitem.style.color= "tomato";  
        myitem.style.backgroundColor= "teal";
    }

function onMouseOut() {
    myitem.style.color= "dimgray";
    myitem.style.backgroundColor= "white";
} 