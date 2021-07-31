document.getElementById("mySidebar").style.display = "none";

// opens sidebar shopping list in the touchscreen demo
function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("openbtn").style.display = "none";
    document.getElementById("maparea").style.display = "none";
}

// closes sidebar shopping list in the touchscreen demo
function closeNav() {
    document.getElementById("openbtn").style.display = "block";
    document.getElementById("maparea").style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("touchscreencontent").style.marginLeft = "0";
}

document.getElementById("mainscreen").style.display = "none";

function cont() {
    document.getElementById("signin").style.display = "none";
    document.getElementById("mainscreen").style.display = "block";
}