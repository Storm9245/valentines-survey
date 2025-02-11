let noClickCount = 0; // Keeps track of how many times "No" has been clicked

function changeContent(choice) {
    // Access the container elements to change the content dynamically
    const gifContainer = document.getElementById('gif-container');
    const textContainer = document.getElementById('text-container');
    const secondGifContainer = document.getElementById('second-gif-container');
    const buttons = document.getElementById('buttons');
    const yesButton = document.getElementById('yes1');
    const noButton = document.getElementById('no1');

    // If "Yes!" is clicked, change to the "Yes" content and hide the buttons
    if (choice === 'yes') {
        gifContainer.innerHTML = `
            <div class="tenor-gif-embed" data-postid="new_gif_post_id" data-share-method="host" data-aspect-ratio="1.32231" data-width="50%">
                <a href="https://tenor.com/view/new_gif">New GIF</a> from 
                <a href="https://tenor.com/search/new-gifs">New GIFs</a>
            </div>
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        `;
        textContainer.innerHTML = `
            <p class="display-4 text-center" style="font-family: 'Pacifico', cursive;">Yay! You said Yes! :3</p>
        `;
        secondGifContainer.innerHTML = `
            <div class="tenor-gif-embed" data-postid="new_second_gif_post_id" data-share-method="host" data-aspect-ratio="1.01911" data-width="30%">
                <a href="https://tenor.com/view/new_second_gif">New Second GIF</a> from 
                <a href="https://tenor.com/search/new-second-gifs">New Second GIFs</a>
            </div>
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        `;
        buttons.style.display = 'none'; // Hide the buttons once the user clicks "Yes!"
    } 
    // If "No!" is clicked
    else if (choice === 'no') {
        // Update content on each "No!" click
        noClickCount++;

        // Change message and second GIF for the "No!" response
        textContainer.innerHTML = `
            <p class="display-4 text-center" style="font-family: 'Pacifico', cursive;">Oh no! You said No! :(</p>
        `;
        secondGifContainer.innerHTML = `
            <div class="tenor-gif-embed" data-postid="no_second_gif_post_id" data-share-method="host" data-aspect-ratio="1.01911" data-width="30%">
                <a href="https://tenor.com/view/no_second_gif">No Second GIF</a> from 
                <a href="https://tenor.com/search/no-second-gifs">No Second GIFs</a>
            </div>
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        `;

        // After a set number of "No!" clicks (e.g., 3), disable "No!" and leave only "Yes!"
        if (noClickCount >= 3) {
            // Disable the "No!" button and update it to say "Last Chance!"
            noButton.disabled = true;
            noButton.innerHTML = "Last Chance!";
        }
    }
}
