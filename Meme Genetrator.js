// Predefined list of memes
const memes = [
    {
        image: "https://i.imgur.com/KvTuLf1.jpg",
        text: "When you try to be productive but your brain says 'nope'"
    },
    {
        image: "https://i.imgur.com/sN8Xy5M.jpg",
        text: "Me, trying to focus on work... Also me, after 5 minutes"
    },
    {
        image: "https://i.imgur.com/7Ir0aBq.jpg",
        text: "My plans vs. Reality"
    },
    {
        image: "https://i.imgur.com/XfF6M4s.jpg",
        text: "Me when I realize it's Monday tomorrow"
    },
    {
        image: "https://i.imgur.com/34X0G70.jpg",
        text: "When you thought you could sleep in but your alarm goes off"
    }
];

// Function to generate random meme
function generateMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const meme = memes[randomIndex];
    
    // Display meme image and text
    document.getElementById("memeImage").src = meme.image;
    document.getElementById("memeText").textContent = meme.text;
}

// Event listener for button click
document.getElementById("newMemeBtn").addEventListener("click", generateMeme);

// Generate an initial meme when the page loads
generateMeme();

