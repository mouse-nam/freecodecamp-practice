document.querySelector('.item-list').addEventListener('click', function (event) {
    // Check if the clicked element is a button with the class 'favorite-icon'
    if (event.target.classList.contains('favorite-icon')) {
        console.log("clicked")
        const button = event.target;

        // Toggle the 'filled' class on the button
        button.classList.toggle('filled');

        // Toggle the heart symbol based on the presence of the 'filled' class
        if (button.classList.contains('filled')) {
            button.innerHTML = '&#10084;'; // Filled heart
        } else {
            button.innerHTML = '&#9825;'; // Empty heart
        }
    }
});