function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function createStars(type, quantity) {
    for (let i = 0; i < quantity; i++) {
        var star = document.createElement('div');
        star.classList.add(`type-${type}`);
        star.style.left = `${randomNumber(0, 100)}%`;
        star.style.top = `${randomNumber(-50, 80)}%`;
        star.style.animationDuration = `${randomNumber(20, 50)}s`;

        document.querySelector("#main #div-test1").appendChild(star);           // equal with next
        //document.getElementById('main').innerHTML += star.outerHTML; // equal

        //console.log(star.outerHTML);
        //console.log(star);
    }
}

createStars(1, 400);
createStars(2, 250);
createStars(3, 150);

var main1 = document.body;
//console.log(main1);
var div_test1 = document.querySelector("#main #div-test1");
console.log(div_test1);