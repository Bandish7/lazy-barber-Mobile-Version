document.getElementById("hambar").onclick = function showMenu(){
document.getElementById("mobmenu").style.display = "block";
document.getElementById("hambar").style.display = "none";
document.getElementById("xmark").style.display = "block";
}
document.getElementById("xmark").onclick = function hideMenu(){
    document.getElementById("mobmenu").style.display = "none";
    document.getElementById("hambar").style.display = "block";
    }