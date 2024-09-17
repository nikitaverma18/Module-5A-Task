

const bodyElement = document.body;

const div = document.createElement("div");
div.classList.add('background-div');

div.style.backgroundImage = "url(whatsappBG.jpg)";
div.style.backgroundSize = "cover";
div.style.height = "100vh";
div.style.flexDirection = "column";
bodyElement.appendChild(div);

const header = document.createElement("div");
header.style.display = "flex";
header.style.alignItems = "center";
header.style.backgroundColor = 'black';
header.style.padding = '10px';
header.style.width = '100%';
header.style.boxSizing = 'border-box';
header.style.justifyContent = 'center'; // Center align the header contents

const logo = document.createElement("img");
logo.src = "headericon.jpg";
logo.alt = "WhatsApp Logo";
logo.style.width = '50px';
logo.style.height = '50px';
logo.style.marginRight = '10px';

const heading = document.createElement("h1");
heading.textContent = 'Whatsapp';
heading.classList.add('heading');
heading.style.color = 'white';
heading.style.fontFamily = 'Roboto, sans-serif';
heading.style.fontWeight = 'bold';
heading.style.fontSize = '24px';
heading.style.margin = '0';

header.appendChild(logo);
header.appendChild(heading);
div.appendChild(header);

const wholediv = document.createElement('div');
wholediv.classList.add('whole');
div.appendChild(wholediv);

const createParagraph = (text, className, time, profileImg) => {
    const paragraph = document.createElement('p');
    paragraph.classList.add(className);
    paragraph.style.display = 'flex';
    paragraph.style.alignItems = 'center';

    const img = document.createElement('img');
    img.src = profileImg;
    img.alt = 'Profile Icon';
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.borderRadius = '50%';
    img.style.marginRight = '10px';

    const spanText = document.createElement('span');
    spanText.textContent = text;

    const spanTime = document.createElement('span');
    spanTime.textContent = time;
    spanTime.style.marginLeft = '10px';
    spanTime.style.fontSize = '12px';
    spanTime.style.color = 'white';

    const spanTick = document.createElement('span');
    spanTick.innerHTML = '&#10004;&#10004;'; // Checkmark symbol
    spanTick.style.color = 'skyblue';
    spanTick.style.marginLeft = '10px';
    spanTick.style.fontSize = '12px';

    paragraph.appendChild(img);
    paragraph.appendChild(spanText);
    paragraph.appendChild(spanTime);
    if (className === 'text-sent' || className === 'text-rec') {
        paragraph.appendChild(spanTick);
    }

    wholediv.appendChild(paragraph);
};

createParagraph('Hi Swati, how are you doing today?', 'text-sent', '10:00 AM', 'https://cdn-icons-png.freepik.com/512/146/146036.png');
createParagraph('Hi Nikita, I am doing well, thank you. How about you?', 'text-rec', '10:01 AM', 'https://cdn-icons-png.freepik.com/256/146/146030.png?semt=ais_hybrid');
createParagraph('I am good, thanks. I wanted to discuss the upcoming project deadline', 'text-sent', '10:02 AM', 'https://cdn-icons-png.freepik.com/512/146/146036.png');
createParagraph('Sure, what is on your mind?', 'text-rec', '10:03 AM', 'https://cdn-icons-png.freepik.com/256/146/146030.png?semt=ais_hybrid');
createParagraph('I was wondering if we could extend the deadline by a week. We need more time for the final testing phase', 'text-sent', '10:04 AM', 'https://cdn-icons-png.freepik.com/512/146/146036.png');
createParagraph('That sounds reasonable. Let me check with the team and see if it would impact our overall schedule', 'text-rec', '10:05 AM', 'https://cdn-icons-png.freepik.com/256/146/146030.png?semt=ais_hybrid');
createParagraph('Great, thank you. I appreciate it.', 'text-sent', '10:06 AM', 'https://cdn-icons-png.freepik.com/512/146/146036.png');

const allTextRec = document.querySelectorAll(".text-rec");
allTextRec.forEach(textRec => {
    textRec.style.backgroundColor = 'black';
    textRec.style.color = 'white';
    textRec.style.padding = '12px';
    textRec.style.borderTopLeftRadius = '50px';
    textRec.style.borderTopRightRadius = '50px';
    textRec.style.borderBottomRightRadius = '50px';
    textRec.style.borderBottomLeftRadius = '50px';
    textRec.style.textAlign = 'right';
    textRec.style.marginRight = '1000px';
    textRec.style.marginTop = '30px';
    textRec.style.fontSize = '18px';
});

const allTextSent = document.querySelectorAll(".text-sent");
allTextSent.forEach(textSent => {
    textSent.style.backgroundColor = 'green';
    textSent.style.padding = '10px';
    textSent.style.borderTopLeftRadius = '50px';
    textSent.style.borderTopRightRadius = '50px';
    textSent.style.borderBottomRightRadius = '50px';
    textSent.style.borderBottomLeftRadius = '50px';
    textSent.style.textAlign = 'right';
    textSent.style.marginLeft = '1000px';
    textSent.style.marginTop = '30px';
    textSent.style.fontSize = '18px';
    textSent.style.color = 'white';
});

console.log(bodyElement);


