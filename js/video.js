export function setupVideo() {
    const video = document.getElementById("myVideo");
    const placeholderImage = document.getElementById("placeholderImage");

    video.addEventListener('click', togglePlayPause);

    function togglePlayPause() {
        if (video.paused) {
            playVideo();
        } else {
            pauseVideo();
        }
    }

    function playVideo() {
        video.play();
        placeholderImage.style.visibility = "hidden";
    }

    function pauseVideo() {
        video.pause();
        placeholderImage.style.visibility = "visible";
    }
}
