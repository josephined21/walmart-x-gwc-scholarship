document.getElementById("mySidebar").style.display = "none";

function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("openbtn").style.display = "none";
    document.getElementById("maparea").style.display = "none";
}

function closeNav() {
    document.getElementById("openbtn").style.display = "block";
    document.getElementById("maparea").style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("touchscreencontent").style.marginLeft = "0";
}