console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/random?api_key=DUeb4i1rrArL1EFYsh29NAsBES84WPN3&tag=&rating=g";

let images = [];

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

