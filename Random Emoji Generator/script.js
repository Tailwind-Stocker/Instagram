// hex values array
const emojis = [
"😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","🥰","😙","😚","🙂","🤗","🤩","🤔","🤨","😮","😥","😣","😏","🙄","😶","😐","🤐","😯","😪","😫","🥱","😴","😌","😛"
    // Add more emojis
];

const generateBtn = document.getElementById("colorGenerateBtn");
const emoji = document.querySelector(".emoji");

// generate random number
generateRandomNumber = () => {
    return Math.floor(Math.random() * emojis.length);
}

// generate random color
generateBtn.addEventListener("click", () => {

    emoji.textContent = emojis[generateRandomNumber()];
})