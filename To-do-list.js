const bodyElement = document.body

const div = document.createElement("div");
bodyElement.appendChild(div);

div.classList.add('background-div');

div.style.backgroundImage = "url(bookBG.jpg)";
div.style.backgroundSize = "cover";
div.style.height = "100vh";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.textAlign = "center";
div.style.padding = "20px";

const heading = document.createElement('h1');
heading.textContent = 'Todolist';
heading.style.color = 'white';
heading.style.position = 'absolute';
heading.style.top = '10px';
heading.style.left = '50%';
heading.style.transform = 'translatex(-40%)';
heading.style.fontSize = '80px'
div.appendChild(heading);

const paragraph = document.createElement("p");
paragraph.textContent = "Each day I will accomplish one thing on my todolist.";
paragraph.style.position = 'absolute'
paragraph.style.top = '190px'
paragraph.style.color = 'white';
paragraph.style.fontWeight = 'bold';
paragraph.style.fontSize = '30px'
div.appendChild(paragraph);

const subHeading = document.createElement("h4");
subHeading.textContent = 'Read a Book :- I dont think that the human race will survive the next thousnd years , unless we spread into space.There are too many accidents that can behalf life on a sin gle planet. but i am an optimist...';
//subHeading.style.fontFamily = 'Arial, sans-serif';
subHeading.style.fontSize = '30px';
subHeading.style.fontWeight = 'bold';
subHeading.style.marginTop = '250px';
subHeading.style.color = 'white';
div.appendChild(subHeading);

const buttonContainer = document.createElement("div");
buttonContainer.style.textAlign = 'center';
div.appendChild(buttonContainer);


const button = document.createElement("button");
button.textContent = 'START';
button.style.padding = '30px 50px';
button.style.marginTop = '150px';
button.style.backgroundColor = 'yellow';
button.style.border = '';
button.style.cursor = 'pointer';
buttonContainer.appendChild(button);

const skipIntroParagraph = document.createElement("p");
skipIntroParagraph.textContent = 'Do not skip Introduction';
skipIntroParagraph.style.color = 'yellow';
skipIntroParagraph.style.fontSize = '40px';
skipIntroParagraph.style.textDecoration = 'underline';
div.appendChild(skipIntroParagraph);

console.log(bodyElement);