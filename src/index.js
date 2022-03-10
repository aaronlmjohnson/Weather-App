import './assets/styles/style.css';
import { button, form} from './dom';

const content = document.getElementById('content');
const img = document.querySelector('img');
const defaultGifSearch = 'cats'
const giphyPromise = fetch(`https://api.giphy.com/v1/gifs/translate?api_key=JSxhrbdc3Pc1hEh4aEifqEwEEmWvVQmq&s=${defaultGifSearch}`, {mode: 'cors'});

const getGiphyJson = (response)=>{
    return response.json();
};

const  giphyPromiseResponse = giphyPromise.then(getGiphyJson);

const  addUrlToImgSrc = (response)=> img.src = response.data.images.original.url;
const  outputGiphyData = (response)=> console.log(response.data);

giphyPromiseResponse.then(outputGiphyData);
giphyPromiseResponse.then(addUrlToImgSrc);


const newImgBtn = button('new-image', true, 'New Image');
const searchForNewGif = form("", "get", 'search-for-gif');
searchForNewGif.addInput('gif-search', 'search', '');
searchForNewGif.addInput('submit', 'submit');



content.append(newImgBtn);
content.append(searchForNewGif.get());

const getNewImage = (e)=>{
    const giphyPromise = fetch(`https://api.giphy.com/v1/gifs/translate?api_key=JSxhrbdc3Pc1hEh4aEifqEwEEmWvVQmq&s=${defaultGifSearch}`, {mode: 'cors'});
    giphyPromise.then(getGiphyJson).then(addUrlToImgSrc);
}

newImgBtn.addEventListener('click', getNewImage);

searchForNewGif.get().addEventListener('submit', (e)=>{
    e.preventDefault();
    const gifSearchValue = document.getElementById('gif-search').value;
    const giphyPromise = fetch(`https://api.giphy.com/v1/gifs/translate?api_key=JSxhrbdc3Pc1hEh4aEifqEwEEmWvVQmq&s=${gifSearchValue}`, {mode: 'cors'});
    giphyPromise.then(getGiphyJson).then(addUrlToImgSrc);
});













