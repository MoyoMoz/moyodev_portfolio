<script>
document.addEventListener("DOMContentLoaded", function() {
    // Get the cube element
    var cube = document.querySelector('.cube');

    // Function to toggle the animation play state
    function toggleRotation(event) {
        var computedStyle = window.getComputedStyle(cube);
        var currentState = computedStyle.animationPlayState;

        if (event.target === cube) {
            // If the cube is clicked, pause or play based on the current state
            cube.style.animationPlayState = (currentState === 'running') ? 'paused' : 'running';
        } else if (currentState === 'paused') {
            // If anywhere outside the cube is clicked and the animation is paused, resume the animation
            cube.style.animationPlayState = 'running';
        }
    }

    // Add event listener to the cube
    cube.addEventListener('click', toggleRotation);

    // Add event listener to the document
    document.addEventListener('click', toggleRotation);
});
</script>