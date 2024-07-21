const serviceApiURL = 'https://script.google.com/macros/s/AKfycbwfmVKISZOcplR2zHrhQ67WEODlZ_d-I2KGlxOL9K9Z8AW-rOnu8gbpimBV2zyn_t3T/exec';
const initiaveApiURL = 'https://script.google.com/macros/s/AKfycbyHETc0WiLzTWjMgjGYLXJVobmbFhIL3boYSeurffk79s3yep7zwQX1S-v3W_han655Lw/exec';


fetch(serviceApiURL)
      .then(response => response.json())
      .then(data => {
        const servicesContainer = document.getElementById('services');
        data.forEach(service => {
          const serviceCard = `
            <div class="col">
              <div class="card">
                <img src="${service.imageUrl}" class="card-img-top" alt="${service.title}">
                <div class="card-body mt-4">
                  <h5 class="card-title">${service.title}</h5>
                  <p class="card-text">${service.description}</p>
                </div>
              </div>
            </div>`;
          servicesContainer.innerHTML += serviceCard;
        });
      })
      .catch(error => console.error('Error fetching data:', error));



      fetch(initiaveApiURL)
      .then(response => response.json())
      .then(data => {
        const servicesContainer = document.getElementById('initiatives-api');
        data.forEach(initiatives => {
          const serviceCard = `
            <div class="col">
              <div class="card">
                <img src="${initiatives.imageUrl}" class="card-img-top" alt="${initiatives.title}">
                <div class="card-body mt-4">
                  <h5 class="card-title">${initiatives.title}</h5>
                  <p class="card-text">${initiatives.description}</p>
                </div>
              </div>
            </div>`;
          servicesContainer.innerHTML += serviceCard;
        });
      })
      .catch(error => console.error('Error fetching data:', error));