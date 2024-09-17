// const bodyElement = document.body;

// const div = document.createElement("div");
// bodyElement.appendChild(div);
// div.className = 'bimage d-flex flex-column justify-content-center';


// const heading = document.createElement("h1");
// heading.className = 'top';
// heading.textContent = 'Code is More Than Some Bytes in a File';

// div.appendChild(heading);

// const allheading = document.querySelector(".top")
// allheading.style.color = 'white';

// allheading.style.fontFamily = 'playwrite GB s",cursive';
// allheading.style.fontOpticalSizing = 'auto'
// allheading.style.fontWeight = '50';
// allheading.style.fontStyle = 'normal';
// allheading.style.backgroundColor = 'purple';
// allheading.style.padding = '15px';
// allheading.style.marginLeft = '100px';
// allheading.style.marginRight = '100px';
// allheading.style.textAlign = 'center';
// allheading.style.fontSize = '50px';

// const bimage = document.querySelector(".bimage")
// bimage.style.backgroundImage = "url(https://t4.ftcdn.net/jpg/05/54/47/79/360_F_554477926_yKEcMeDTD1oLqKQCjvpryeT5zHLMunNh.jpg)";
// bimage.style.backgroundSize = 'cover';
// bimage.style.height = '100vh';
// bimage.style.padding = '30px';
// bimage.style.borderColor = 'white';
// bimage.style.borderWidth = '5px';
// bimage.style.borderStyle = 'solid';


// console.log(bodyElement);

const bodyElement = document.body;

const div = document.createElement("div");
bodyElement.appendChild(div);
div.className = 'bimage d-flex flex-column justify-content-center';

const heading = document.createElement("div");
heading.className = 'top';

const icon = document.createElement("img");
icon.src = "TaskEmoji.png"; 
icon.alt = "Document Icon";
icon.style.width = '50px';
icon.style.height = '50px';
icon.style.marginRight = '30px';

const headingText = document.createElement("span");
headingText.textContent = 'Code is More Than Some Bytes in a File';

heading.appendChild(icon);
heading.appendChild(headingText);

div.appendChild(heading);

const allheading = document.querySelector(".top");
allheading.style.color = 'white';
allheading.style.fontFamily = 'Playfair Display, serif';
allheading.style.fontOpticalSizing = 'auto';
allheading.style.fontWeight = '500';
allheading.style.fontStyle = 'normal';
allheading.style.backgroundColor = 'purple';
allheading.style.padding = '15px';
allheading.style.marginLeft = '100px';
allheading.style.marginRight = '100px';
allheading.style.textAlign = 'center';
allheading.style.fontSize = '50px';
allheading.style.display = 'flex';
allheading.style.alignItems = 'center';
allheading.style.justifyContent = 'center';

const bimage = document.querySelector(".bimage");
bimage.style.backgroundImage = "url(TaskBG.jpg)";
bimage.style.backgroundSize = 'cover';
bimage.style.height = '100vh';
bimage.style.padding = '30px';
bimage.style.borderColor = 'white';
bimage.style.borderWidth = '5px';
bimage.style.borderStyle = 'solid';

console.log(bodyElement);
