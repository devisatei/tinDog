// Remember to import the data and Dog class!
import Dog from '/Dog.js';
import dogs from '/data.js';

let currentDogIndex = 0;
let likedDogs = [];
const endAppBtn = document.getElementById('return-btn')
endApp.addEventListener('click', function(e){
    if(e.avatar.id === 'return-btn'){
        endApp()
    }
})

let currentDog = new Dog(dogs[currentDogIndex]);

document.getElementById('reject-button').addEventListener('click', isRejected);
document.getElementById('accept-button').addEventListener('click', isLiked);

function getNewDog(){
    currentDogIndex++;
    currentDog = new Dog(dogs[currentDogIndex]);
    render();
};

function isRejected(){
    currentDog.setMatchStatus(false);
    document.getElementById('status').innerHTML = `
        <img class="badge" src="./images/badge-nope.png">`
    
    setTimeout(function(){
        getNewDog()
    }, 1000);
};

function isLiked() {
    currentDog.setMatchStatus(true);
    likedDogs.push(currentDog.avatar);
    document.getElementById('status').innerHTML = `
        <img class="badge" src="./images/badge-like.png">`
    
    setTimeout(function(){
        getNewDog()
    }, 1000);
}

function render(){
    const likeDogsAvatar = likedDogs.map((avatar) => 
        `<div class="favourite-grid">
            <img src="${avatar}" class="liked-img" \>
        </div>`).join('');
    if(currentDogIndex > 2){
        document.getElementById('card').innerHTML = `        
            <div class="favourite-dogs">
                <h2 class="favourite-text">Here are your favourite dogs 💗</h2>
                ${likeDogsAvatar}
                <button id="return-btn">Go back</button>
            </div>
        `;
        currentDogIndex = 0;
    } else {
        document.getElementById('card').innerHTML = currentDog.getDogHtml();
    }
};

const endApp = () => {
    location.reload()
}

render();