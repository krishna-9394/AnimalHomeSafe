document.addEventListener('DOMContentLoaded', () => {
    const organizations = [
        {
            name: "WWF",
            description: "The WWF is the world’s leading animal conservation charity...",
            website: "https://www.worldwildlife.org/"
        },
        {
            name: "International Rhino Foundation",
            description: "A vital charity that helps rhinos across the globe...",
            website: "https://www.rhinos.org/"
        },
        // Add information for other organizations
    ];

    const organizationsContainer = document.querySelector('.organizations');

    organizations.forEach((org) => {
        const orgCard = document.createElement('div');
        orgCard.classList.add('organization-card');

        const name = document.createElement('h2');
        name.textContent = org.name;

        const description = document.createElement('p');
        description.textContent = org.description;

        const websiteLink = document.createElement('a');
        websiteLink.href = org.website;
        websiteLink.target = '_blank';
        websiteLink.textContent = 'Know More';

        orgCard.appendChild(name);
        orgCard.appendChild(description);
        orgCard.appendChild(websiteLink);

        organizationsContainer.appendChild(orgCard);
    });
});
