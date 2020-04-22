var removeCartItemButtoms = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtoms)
for(i=0; i < removeCartItemButtoms.length; i++){
    var button = removeCartItemButtoms[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove();
    })
}