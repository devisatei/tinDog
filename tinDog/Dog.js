// Create the Dog class here
import dogs from '/data.js';

class Dog {
    constructor(data){
        Object.assign(this, data);
        this.isLiked = false;
        this.isSwiped = false;
    };
    
    setMatchStatus(bool) {
        this.isLiked = bool;
        this.isSwiped = true;        
    };
    
    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this;
        return `
            <div class="dog-inner">
                <div class="dog-info">
                    <div id="status"></div>
                    <h3 class="dog-name">${name}, ${age}</h3>
                    <p class="dog-bio">${bio}</p>
                </div>
                <img class="dog-img" src="${avatar}" \>
            </div>`
    };
};

export default Dog;