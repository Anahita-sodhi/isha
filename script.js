document.getElementById('reveal-button').addEventListener('click', function() {
    var surpriseContent = document.getElementById('surprise-content');
    surpriseContent.style.display = 'block';
});

// Optional: Mute/Unmute background music with a button (for user control)
document.getElementById('background-music').volume = 0.2;  // Set volume lower for background music
function showContent(boxId) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    
    let content = '';
    switch (boxId) {
        case 'box1':
            content = '<h2>Memory 1</h2><p>This is where we first met and sat next to each other!</p>';
            break;
        case 'box2':
            content = '<h2>Memory 2</h2><p>Our fun times at that amazing event together!</p>';
            break;
        case 'box3':
            content = '<h2>Memory 3</h2><p>The time we shared a laugh that we still talk about!</p>';
            break;
        default:
            content = '<h2>Unknown</h2><p>Something went wrong.</p>';
    }

    popupContent.innerHTML = content;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
