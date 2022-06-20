const baseUrl = 'https://api.thedogapi.com/v1/images/search/';

const dogImg = document.getElementById('dog');
const dogBtn = document.getElementById('change-dog');

const getDogs = async () => {
    const data = await fetch(baseUrl)
    .then(res => res.json())
    .catch(e => console.log(e.message))

    return data[0].url;
}

const loadImg = async () => {
    dogImg.src = await getDogs();
}

dogBtn.addEventListener(`click`, loadImg);

loadImg();