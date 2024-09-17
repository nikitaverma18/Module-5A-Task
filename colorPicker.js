
document.getElementById('whi').addEventListener('click', function() {
    changeBackgroundImage("whiteBG.jpg");
    document.querySelector('.color-text').textContent = 'white';
});

document.getElementById('blk').addEventListener('click', function() {
    changeBackgroundImage("blackBG.png");
    document.querySelector('.color-text').textContent = 'black';
    document.querySelector('.background-info').style.color = 'white'; 
});

document.getElementById('purple').addEventListener('click', function() {
    changeBackgroundImage("purpleBG.png");
    document.querySelector('.color-text').textContent = 'purple';
});

document.getElementById('blue').addEventListener('click', function() {
    changeBackgroundImage("blueBG.jpg");
    document.querySelector('.color-text').textContent = 'blue';
});

function changeBackgroundImage(url) {
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
}
