const body = document.body;

document.body.style.backgroundImage = "url(restaurantBG.jpg)";
document.body.style.backgroundSize = 'cover';
document.body.style.height = '100vh';
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.textAlign = "center";
document.body.style.padding = "20px";
document.body.style.margin = '0';
document.body.style.position = 'relative';

const div = document.createElement('div');
div.style.backgroundColor = '#f6c56e';
div.style.width = '100%';
div.style.height = '30vh';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.position = 'absolute';
div.style.bottom = '0';
div.style.padding = '50px';
// div.style.borderTopRightRadius = '200px'; 
// div.style.borderTopLeftRadius = '150px';

body.append(div);

const heading = document.createElement('h1');
heading.textContent = 'Happy Meals';
heading.style.fontFamily = 'Bree Serif';
heading.style.fontSize = '80px';
heading.style.margin = '20px';
div.appendChild(heading);

const paragraph = document.createElement("p");
paragraph.className = 'page';
paragraph.textContent = 'Discover the best foods over the 1,000 restaurants';
paragraph.style.fontFamily = 'roboto';
paragraph.style.fontSize = '30px';
paragraph.style.textAlign = 'center'
paragraph.style.margin = '10px 0';

div.appendChild(paragraph);

const button = document.createElement("button");
button.textContent = 'Book Now';
button.style.backgroundColor = '#ffffff';
button.style.fontSize = '40px';
button.style.marginTop = '20px';
button.style.padding = '10px 20px';
button.style.borderRadius = '15px';
button.style.borderColor = 'white';
div.appendChild(button);

console.log(body);
