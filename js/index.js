let cards = document.querySelector("#card__list")

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    for (let user of data) {
        const pics = document.createElement("img")
        pics.src = user.thumbnailUrl;
        
        cards.appendChild(pics);
    }
  })








