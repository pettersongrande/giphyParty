const form = document.getElementById('mainForm');
const search = document.getElementsByClassName('searchButton');
const remove = document.getElementById('removeButton');
const gifsSection = document.getElementById('giphyArea');
const input = document.getElementById('searchInput');

// GIPHY API key HtmbRBPHt1GPPWu19H0n9oPRRsYs8SWZ

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getGiphy(input.value);
    input.value = '';
    
});


async function getGiphy(word){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=HtmbRBPHt1GPPWu19H0n9oPRRsYs8SWZ&tag=${word}&rating=g`);
    const imgLink = res.data.data.images.original.url;
    newImgFunc(imgLink);
   
};

remove.addEventListener('click', (e)=>{
    e.preventDefault();
    gifsSection.remove('IMG');


});

function newImgFunc(imgUrl){
    const newGiphy = document.createElement('IMG');
    newGiphy.src = imgUrl;
    newGiphy.classList.add('imgBox');
    gifsSection.append(newGiphy);
};


