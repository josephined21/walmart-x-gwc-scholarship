document.getElementById("mySidebar").style.display = "none";

let num = 0;

// x button closes sidebar shopping list in the touchscreen demo
function closeNav() {
    num++;
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("touchscreencontent").style.marginLeft = "0";
}

// menu button opens or closes sidebar shopping list in the touchscreen demo
function openCloseNav() {
    num++;
    if (num % 2 == 1) {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("mySidebar").style.width = "20%";
    } else {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("touchscreencontent").style.marginLeft = "0";
    }
}

document.getElementById("mainscreen").style.display = "none";

function cont() {
    document.getElementById("signin").style.display = "none";
    document.getElementById("mainscreen").style.display = "block";
}