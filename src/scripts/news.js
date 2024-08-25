const newsApiURL = 'https://script.google.com/macros/s/AKfycbwCM4Ham2dusPC7QImRdkDY9KZJwMzm5VR54l0u_Cfbzs15tRw7c2myDuzwgb1NH6gm/exec';


fetch(newsApiURL)
      .then(response => response.json())
      .then(data => {
        const newssContainer = document.getElementById('news-api');
        data.forEach(news => {
          const newsCard = `
            <div class="col">
              <div class="card">
                <img src="${news.imageUrl}" class="card-img-top" alt="${news.title}">
                <div class="card-body mt-4">
                    <p class="card-text" id="news-card">${news.desc}</p>
                    <a class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" target="_blank" href="${news.newsLink}">Read More</h5>
                </div>
              </div>
            </div>`;
          newssContainer.innerHTML += newsCard;
        });
      })
      .catch(error => console.error('Error fetching data:', error));