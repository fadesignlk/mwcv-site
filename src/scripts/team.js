// URL of the API endpoint
const apiURL = 'https://script.google.com/macros/s/AKfycbyT6NrvVTtl9gCzQyG9gokXCGNGPTd2h6Hl06Ak6HoMbpjkSCKiwu1isNaQltWerMUP/exec';

// Function to create a member card
function createMemberCard(member) {

    // Create container div for a member
    const colDiv = document.createElement('div');
    colDiv.className = 'col';

    // Create container div for a member
    const memberDiv = document.createElement('div');
    memberDiv.className = 'card';
    colDiv.appendChild(memberDiv);

    // Create and append image element
    const img = document.createElement('img');
    img.className = 'card-img-top'
    img.src = member.photolink;
    img.alt = member.name;
    memberDiv.appendChild(img);

    const cardBodyDev = document.createElement('div');
    cardBodyDev.className = 'card-body';
    memberDiv.appendChild(cardBodyDev);

    // Create and append name element
    const name = document.createElement('h5');
    name.className = 'card-title';
    name.textContent = member.name;
    cardBodyDev.appendChild(name);

    // Create and append position element
    const position = document.createElement('p');
    position.className = 'card-text';
    position.textContent = member.position;
    cardBodyDev.appendChild(position);

    return colDiv;
}

// Function to fetch and display team members
async function fetchAndDisplayTeamMembers() {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const teamMembers = await response.json();
        
        const loadingDiv = document.getElementById('loading');
        const teamDiv = document.getElementById('team');
        teamDiv.innerHTML = ''; // Clear existing content
        
        teamMembers.forEach(member => {
            const memberCard = createMemberCard(member);
            teamDiv.appendChild(memberCard);
        });

        loadingDiv.style.display = 'none';
        teamDiv.style.display = 'flex';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Fetch and display team members on page load
document.addEventListener('DOMContentLoaded', fetchAndDisplayTeamMembers);
