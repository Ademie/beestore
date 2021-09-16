// NAVBAR SCRIPT FOR ALL PAGES

var menu = document.getElementById("menu")

// menu.style.maxHeight = "0px"
function menutoggle(){
    if (menu.style.maxHeight == '0px'){
        menu.style.maxHeight = "200px"
    }
    else{
        menu.style.maxHeight = "0px"
    }
}
// PRODUCT DETAIL PAGE
// PRODUCT IMAGE GALLERY SCRIPT
var prodImg = document.getElementById("prod-img")
var SmallImg = document.getElementsByClassName("small-img")

// addevent listener to each of the small images
SmallImg[0].onclick = function(){
    prodImg.src = SmallImg[0].src
}
SmallImg[1].onclick = function(){
    prodImg.src = SmallImg[1].src
}
SmallImg[2].onclick = function(){
    prodImg.src = SmallImg[2].src
}
SmallImg[3].onclick = function(){
    prodImg.src = SmallImg[3].src
}