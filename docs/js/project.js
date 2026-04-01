document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');

    if (header) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }

    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxClose = document.querySelector('#lightbox .close');

    const videobox = document.getElementById('videobox');
    const videoboxFrame = document.getElementById('videobox-frame');
    const videoboxTitle = document.getElementById('videobox-title');
    const videoboxDescription = document.getElementById('videobox-description');
    const videoboxPlaylist = document.getElementById('videobox-playlist');
    const videoboxClose = document.getElementById('videobox-close');

    const projectVideoGroups = window.projectVideoGroups || {};

    function buildYouTubeEmbedUrl(url) {
        try {
            const parsed = new URL(url);
            const playlistId = parsed.searchParams.get('list');
            let videoId = '';

            if (parsed.hostname.includes('youtu.be')) {
                videoId = parsed.pathname.replace('/', '');
            } else if (parsed.searchParams.get('v')) {
                videoId = parsed.searchParams.get('v');
            } else if (parsed.pathname.startsWith('/embed/')) {
                videoId = parsed.pathname.split('/')[2];
            }

            if (!videoId) {
                return url;
            }

            const params = new URLSearchParams({ autoplay: '1', rel: '0' });
            if (playlistId) {
                params.set('list', playlistId);
            }

            return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
        } catch (error) {
            return url;
        }
    }

    function renderVideoPlaylist(videos, activeIndex) {
        if (!videoboxPlaylist) {
            return;
        }

        videoboxPlaylist.innerHTML = '';
        if (!videos || videos.length < 2) {
            return;
        }

        videos.forEach((video, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = video.title || `Video ${index + 1}`;
            if (index === activeIndex) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                playVideoSelection(videos, index);
            });
            videoboxPlaylist.appendChild(button);
        });
    }

    function playVideoSelection(videos, index) {
        const activeVideo = videos[index];
        if (!activeVideo || !videoboxFrame) {
            return;
        }

        videoboxFrame.src = buildYouTubeEmbedUrl(activeVideo.url || activeVideo.videoSrc || '');
        if (videoboxTitle) {
            videoboxTitle.textContent = activeVideo.title || '';
        }
        if (videoboxDescription) {
            videoboxDescription.textContent = activeVideo.description || '';
        }
        renderVideoPlaylist(videos, index);
    }

    function openLightbox(img) {
        if (!lightbox || !lightboxImg || !lightboxDescription) {
            return;
        }

        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxDescription.textContent = img.getAttribute('data-description') || '';
    }

    function openVideobox(videoPayload) {
        if (!videobox || !videoboxFrame) {
            return;
        }

        const videos = Array.isArray(videoPayload)
            ? videoPayload
            : [videoPayload];

        videobox.setAttribute('aria-hidden', 'false');
        videobox.style.display = 'flex';
        playVideoSelection(videos, 0);
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.style.display = 'none';
        }
    }

    function closeVideobox() {
        if (videobox) {
            videobox.setAttribute('aria-hidden', 'true');
            videobox.style.display = 'none';
        }
        if (videoboxFrame) {
            videoboxFrame.src = '';
        }
        if (videoboxPlaylist) {
            videoboxPlaylist.innerHTML = '';
        }
    }

    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            const directVideo = img.getAttribute('data-video-src');
            const groupId = img.getAttribute('data-video-group-id');

            if (groupId && projectVideoGroups[groupId]) {
                openVideobox(projectVideoGroups[groupId]);
                return;
            }

            if (directVideo) {
                openVideobox({
                    title: img.getAttribute('data-title') || '',
                    description: img.getAttribute('data-description') || '',
                    videoSrc: directVideo
                });
                return;
            }

            openLightbox(img);
        });
    });

    lightboxClose?.addEventListener('click', closeLightbox);
    videoboxClose?.addEventListener('click', closeVideobox);

    lightbox?.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    videobox?.addEventListener('click', (event) => {
        if (event.target === videobox) {
            closeVideobox();
        }
    });
});
