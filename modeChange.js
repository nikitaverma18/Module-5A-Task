// Create a toggle button that changes the screen to dark-mode when clicked & light- mode when clicked again.

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body")
let currmode = "dark"
modebtn.addEventListener("click",() =>{
    console.log("You are trying to change mode");
    if(currmode === "light")
    {
        currmode = "dark";
        //document.querySelector("body").style.backgroundImage = "url(https://png.pngtree.com/background/20230410/original/pngtree-quest-game-horror-castle-theme-background-picture-image_2384834.jpg)";
        body.classList.add("dark");
        body.classList.remove("light");
    } else{
        currmode = "light";
        //document.querySelector("body").style.backgroundImage = "url(https://i0.wp.com/vampiresquid.co.uk/wp-content/uploads/2017/12/16msohj.jpg?fit=1024%2C576&ssl=1)";
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currmode);

})