

function clickMenu(){
    let menuItems = document.getElementById("dropdown");


    if (menuItems.style.display === "block"){
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
}