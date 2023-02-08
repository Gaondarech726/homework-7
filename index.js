var idstock = document.getElementById("stock");
var stock = document.querySelector('.stock-btn');

var idcontact = document.getElementById("contacts");
var contact = document.querySelector('.contacts-btn');

var iddescription = document.getElementById("description");
var description = document.querySelector('.description-btn');

function stocksButtonClick() {
    idstock.scrollIntoView({block: "center", behavior: "smooth"});
}

function contactsButtonClick() {
    idcontact.scrollIntoView({block: "center", behavior: "smooth"});
}

function descriptionButtonClick() {
    iddescription.scrollIntoView({block: "center", behavior: "smooth"});
}

stock.addEventListener('click', stocksButtonClick);
contact.addEventListener('click', contactsButtonClick);
description.addEventListener('click', descriptionButtonClick);