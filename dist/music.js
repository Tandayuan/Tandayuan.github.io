const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'url1.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: '逆战',
            artist: '张杰',
            url: 'https://www.ytmp3.cn/down/75143.mp3',
            cover: 'cover2.jpg',
        }
    ]
});