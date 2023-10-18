// Animal place data (sample data)
const animalPlaces = [
    {
        name: "Wildlife Sanctuary A",
        desc: "A sanctuary for exotic animals.",
        image: "path-to-image1.jpg",
    },
    {
        name: "Safari Park B",
        desc: "Home to various species in a natural habitat.",
        image: "path-to-image2.jpg",
    },
    {
        name: "Bird Sanctuary C",
        desc: "A paradise for birdwatchers.",
        image: "path-to-image3.jpg",
    },
    // Add more animal places as needed
];

function renderAnimalPlaces() {
    const animalPlacesContainer = document.getElementById('animalPlacesDisplay');
    animalPlacesContainer.innerHTML = ''; // Clear existing content

    animalPlaces.forEach((animalPlace, index) => {
        const animalPlaceCard = document.createElement('div');
        animalPlaceCard.classList.add('animal-place-card');

        const animalImage = document.createElement('img');
        animalImage.src = animalPlace.image;
        animalImage.alt = animalPlace.name;

        const animalDescription = document.createElement('div');
        animalDescription.classList.add('animal-description');

        const animalName = document.createElement('h3');
        animalName.textContent = animalPlace.name;

        const animalDesc = document.createElement('p');
        animalDesc.textContent = animalPlace.desc;

        const viewDetailsButton = document.createElement('button');
        viewDetailsButton.textContent = 'View Details';
        viewDetailsButton.onclick = function () {
            // Handle the "View Details" button click
            showDetails(animalPlace.name, animalPlace.desc);
        };

        // Append elements to the card
        animalDescription.appendChild(animalName);
        animalDescription.appendChild(animalDesc);
        animalPlaceCard.appendChild(animalImage);
        animalPlaceCard.appendChild(animalDescription);
        animalPlaceCard.appendChild(viewDetailsButton);

        // Append the card to the container
        animalPlacesContainer.appendChild(animalPlaceCard);
    });
}

function showDetails(name, description) {
    alert(`Animal Place: ${name}\nDescription: ${description}`);
}

// Render animal places on page load
renderAnimalPlaces();
