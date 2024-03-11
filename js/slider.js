export function setupSlider() {
    const slider = document.querySelector('.video-list');
    const rightScroll = document.getElementById('rightScroll');
    const leftScroll = document.getElementById('leftScroll');
    const videoElements = document.querySelectorAll('.video-container');

    let activeVideo = 0;
    const videoArray = Array.from(videoElements);

    rightScroll.addEventListener('click', () => {
        activeVideo++;
        if (activeVideo >= videoArray.length) activeVideo = 0;

        const removedVideo = document.querySelector('.video-container');
        removedVideo.remove();

        const newVideo = videoArray[activeVideo].cloneNode(true);
        slider.append(newVideo);
    });

    leftScroll.addEventListener('click', () => {
        activeVideo--;
        if (activeVideo < 0) activeVideo = videoArray.length - 1;
        slider.innerHTML = '';

        for (let i = activeVideo; i < videoArray.length; i++) {
            const newVideo = videoArray[i].cloneNode(true);
            slider.appendChild(newVideo);
        }

        for (let i = 0; i < activeVideo; i++) {
            const newVideo = videoArray[i].cloneNode(true);
            slider.appendChild(newVideo);
        }
    });
}
