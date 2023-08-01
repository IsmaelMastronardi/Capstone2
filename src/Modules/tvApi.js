const myUrl = 'https://api.tvmaze.com/shows/'


const display = (json) => {
  
  document.body.appendChild(myImg)
}

const createCard = (obj, json) => {
  // Create a div element with class card
  const card = document.createElement('div');
  card.className = 'card';

  // Create a h3 element with the name of the show
  const title = document.createElement('h3');
  title.textContent = obj.name;

  // Create a div element with class img-container
  const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    //Create an image
  const myImg = document.createElement('img');
  myImg.src = json.image.original;

  // Append the title and the imgContainer to the card
    imgContainer.appendChild(myImg)
    card.appendChild(title); ;
    card.appendChild(imgContainer);
    

  // Return the card element
//   return card;
};

export const fetchTvApi = async (obj) => {
  const response = await fetch(myUrl+obj.id);
  const json = await response.json();
  if (json) {
    createCard(obj, json);
  }
};


// const myArr = [{
//   "name": "Game of Thrones",
//   "id": "82"
// },
// {
//   "name": "Girls",
//   "id": "1"
// },
// {
//   "name": "show 3",
//   "id": "3"
// }
// ]

// myArr.forEach((elem)=>{
//   showImg(elem)
// })