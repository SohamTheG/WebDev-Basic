
var detailsForm = document.getElementById('Destination_details_form');

detailsForm.addEventListener('submit', handleformsubmit);
function handleformsubmit(event) {
    event.preventDefault();

    var destname = event.target.elements['name'].value;
    var destlocation = event.target.elements['location'].value;
    var destphoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;
    for (var i = 0; i < detailsForm.clientHeight; i++) {
        if (detailsForm.elements[i]) {
            detailsForm.elements[i].value = "";
        }
    }

    var destinationCard = createDestinationCard(destname, destlocation, destphoto, destDesc);

    var wishlistcontainer = document.getElementById('Destinations_container');
    if (wishlistcontainer.children.length === 0) {
        document.getElementById('title').innerHTML = 'My Wishlist';
    }

    wishlistcontainer.appendChild(destinationCard);
}

function createDestinationCard(name, location, photoURL, description) {

    var card = document.createElement('div');
    card.className = 'card';
    var img = document.createElement('img');
    img.setAttribute('alt', name);
    var constPhotoURL = 'images/signpost.jpg';
    if (!photoURL || photoURL.trim() === "") {
        img.setAttribute('src', constPhotoURL);
    } else {
        img.setAttribute('src', photoURL);
    }
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    cardBody.appendChild(img);

    var cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length != 0) {
        var cardDescription = document.createElement('p');
        cardDescription.className = "card-text";
        cardDescription.innerText = description;
        cardBody.appendChild(cardDescription);
    }

    var cardDeleteButton = document.createElement('button')
    cardDeleteButton.innerText = "Remove"
    cardDeleteButton.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteButton);
    card.appendChild(cardBody);
    return card
}

function removeDestination(e) {
    var card = e.target.parentElement.parentElement;
    card.remove();
}