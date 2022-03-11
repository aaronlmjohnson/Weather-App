import './assets/styles/style.css';
import { button, form} from './dom';

const content = document.getElementById('content');
const img = document.querySelector('img');
let currentSearch = 'cats'

const getGifs = async (search)=>{
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=JSxhrbdc3Pc1hEh4aEifqEwEEmWvVQmq&s=${search}`;
    const response =  await fetch(url, {mode: 'cors'});
    const gifData = await response.json();

    img.src = gifData.data.images.original.url;  
}

const getNewImage = (e)=>{
    getGifs(currentSearch);
}

const searchForGif = (e)=>{
    e.preventDefault();
    currentSearch = document.getElementById('gif-search').value;
    getGifs(currentSearch);
};

const pageStructure = (()=>{
    const newImgBtn = button('new-image', true, 'New Image');
    const searchForNewGif = form("", "get", 'search-for-gif');

    searchForNewGif.addInput('gif-search', 'search', '');
    searchForNewGif.addInput('submit', 'submit');

    content.append(newImgBtn);
    content.append(searchForNewGif.get());

    newImgBtn.addEventListener('click', getNewImage);

    searchForNewGif.get().addEventListener('submit', searchForGif); 
})();

getGifs(currentSearch);

















