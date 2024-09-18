const clientId = '75f99e6a5b8e4ad9a7d434c5cc0c4d15';
        const clientSecret = '537cc6031d154aaf9fa8c55b4c04ff50';
        let accessToken = '';
        let currentlyPlayingAudio = new Audio();
        let isPlaying = false;

        async function getAccessToken() {
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
                },
                body: 'grant_type=client_credentials'
            });
            const data = await result.json();
            accessToken = data.access_token;
        }

        async function searchSpotify(query) {
            const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });
            const data = await result.json();
            displayResults(data.tracks.items);
        }

        function displayResults(tracks) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; 

            tracks.forEach(track => {
                const trackHtml = `
                    <div class="col">
                        <div class="card mb-4 shadow-sm h-100">
                            <img src="${track.album.images[0].url}" class="album-img" alt="${track.name}">
                            <div class="card-body">
                                <h5 class="card-title">${track.name}</h5>
                                <p class="card-text">${track.artists[0].name}</p>
                                <button class="play-song-btn" data-preview-url="${track.preview_url}">
                                   Play
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                resultsDiv.innerHTML += trackHtml;
            });

            document.querySelectorAll('.play-song-btn').forEach(button => {
                button.addEventListener('click', function () {
                    const previewUrl = this.getAttribute('data-preview-url');
                    playSong(previewUrl);

                    const card = this.closest('.card');
                    const img = card.querySelector('img').src;
                    const title = card.querySelector('.card-title').textContent;
                    const artist = card.querySelector('.card-text').textContent;

                    document.getElementById('playing-img').src = img;
                    document.getElementById('playing-title').textContent = title;
                    document.getElementById('playing-artist').textContent = artist;

                    document.getElementById('currently-playing').classList.remove('d-none');
                });
            });
        }

        function playSong(previewUrl) {
            if (currentlyPlayingAudio.src !== previewUrl) {
                currentlyPlayingAudio.src = previewUrl;
                currentlyPlayingAudio.play();
                isPlaying = true;
            } else if (isPlaying) {
                currentlyPlayingAudio.pause();
                isPlaying = false;
            } else {
                currentlyPlayingAudio.play();
                isPlaying = true;
            }

            updatePlayPauseButton();
        }

        function updatePlayPauseButton() {
            const playPauseBtn = document.getElementById('play-pause-btn');
            if (isPlaying) {
                playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
            } else {
                playPauseBtn.innerHTML = '&#9658;'; // Play icon
            }
        }

        document.getElementById('play-pause-btn').addEventListener('click', function () {
            if (isPlaying) {
                currentlyPlayingAudio.pause();
                isPlaying = false;
            } else {
                currentlyPlayingAudio.play();
                isPlaying = true;
            }
            updatePlayPauseButton();
        });

        document.getElementById('search').addEventListener('input', function (e) {
            const query = e.target.value;
            if (query.length > 2) {
                searchSpotify(query);
            }
        });

        getAccessToken(); // Initialize access token on page load