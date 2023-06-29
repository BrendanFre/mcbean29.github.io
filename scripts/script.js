let dropdown_menu = document.getElementById("dropdown");
let dropdown_button = document.getElementById("menu-button")

function dropping_menu(){
    if(dropdown_menu.style.display === "block"){
        dropdown_menu.style.display = "none";
        dropdown_button.style.backgroundColor = "#fff";
        console.log("Block dropdown");
    } else {
        dropdown_menu.style.display = "block";
        dropdown_button.style.backgroundColor = "#000"
        console.log("none dropdown");
    }
    
}