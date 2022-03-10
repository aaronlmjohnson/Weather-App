import './assets/styles/style.css';
import { button } from './dom';

const content = document.getElementById('content');
const img = document.querySelector('img');
const giphyPromise = fetch('https://api.giphy.com/v1/gifs/translate?api_key=JSxhrbdc3Pc1hEh4aEifqEwEEmWvVQmq&s=cats', {mode: 'cors'});

const consoleJsonOutput = (response)=>{
    return response.json();
};

const  giphyPromiseResponse = giphyPromise.then(consoleJsonOutput);
const  addUrlToImgSrc = (response)=> img.src = response.data.images.original.url;

giphyPromiseResponse.then(addUrlToImgSrc);

const newImgBtn = button('new-image', true, 'New Image');

content.append(newImgBtn);

const getNewImage = (e)=>{
    const giphyPromise = fetch('https://api.giphy.com/v1/gifs/translate?api_key=JSxhrbdc3Pc1hEh4aEifqEwEEmWvVQmq&s=cats', {mode: 'cors'});
    giphyPromise.then(consoleJsonOutput).then(addUrlToImgSrc);
}

newImgBtn.addEventListener('click', getNewImage);












