const removaProductButtons = document.getElementsByClassName("remove-product-button")
console.log(removeProductButtons)
for(var i = 0; i < removeProductButtons.legth; i++) {
    removeProductButtons[i].addEventListener("click", function(event) {
    event.target.parentElement.parentElement.remove()
    })
}
