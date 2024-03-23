fetch('/fetchdata')
    .then(response => response.json())
    .then(data => {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = data.url;
        videoPlayer.load();
    });