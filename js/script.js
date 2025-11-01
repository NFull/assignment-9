console.log("script.js loaded");

// endpoint for Giphy API
let endpoint = "https://api.giphy.com/v1/gifs/random?api_key=DUeb4i1rrArL1EFYsh29NAsBES84WPN3&tag=&rating=g";

// array to hold image URLs
let images = [];

// function to fetch GIFs from the API
async function fetchGifs() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    if (data.data && data.data.images && data.data.images.original) {
      images = [data.data.images.original.url];
    }
    
    console.log('Images array:', images);
    return images;
} catch (error) {
    console.error('Error fetching GIFs:', error);
    return [];
  }
}
 // DOM elements
const gifContainer = document.querySelector('#gif-container');
const button = document.querySelector('#fetch-gif-btn');

// event listener for button click
button.addEventListener('click', async () => {
  await fetchGifs();
  images.forEach(url => {
    gifContainer.innerHTML += `<img src=${url} class = "col-3 mb-3">`;
  });
});

