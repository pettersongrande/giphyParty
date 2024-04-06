const form = document.getElementById('mainForm');
const search = document.getElementsByClassName('searchButton');
const remove = document.getElementsByClassName('removeButton');
const gifsSection = document.getElementById('giphyArea');
const input = document.getElementById('searchInput');

// GIPHY API key HtmbRBPHt1GPPWu19H0n9oPRRsYs8SWZ

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(input.value)
    
});

async function getGiphy(word){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=HtmbRBPHt1GPPWu19H0n9oPRRsYs8SWZ&limit=1`);
   
    const imgLink = res.data.data[0].images.original.url;
    newImgFunc(imgLink);
   
};

function newImgFunc(imgUrl){
    const newGiphy = document.createElement('IMG');
    newGiphy.src = imgUrl;
    newGiphy.classList.add('imgBox');
    gifsSection.append(newGiphy);
}

// getGiphy('gretchen');