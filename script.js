<<<<<<< HEAD
var displayInfo = document.querySelector(‘div’)
fetch(“http://www.songsterr.com/a/ra/songs/byartists.json?artists=Nirvana", {
    method: ‘Get’,
    credentials: ‘same-origin’,
    redirect: ‘follow’,
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});
displayInfo.addEventListener(‘click’ )
=======
var displayInfo = document.querySelector ('div')
var artistInputEl = document.querySelector ('#artistName');
var songContainer = document.querySelector ('#song-container');

fetch("https://www.songsterr.com/a/ra/songs/byartists.json?artiosts=Nirvana", {
    method: 'Get',
    credentials: 'same-origin',
    redirect: 'follow',
})

.then(function (response){
    return response.json();
})

.then(function (data){
    console.log(data);
});

displayInfo.addEventListener('click')

var formSubmitHandler = function (event) {
    var artistD = artistInputEl.value.trim();
    
    if(artistD) {
        getArtistList(artistD);

        artistsDiscography.textContent = '';
        artistInputEl.value = '';
    } else {
        alert('Try searching someone else');
    }
};

var getArtistList = function (artist) {
    var apimusic = 'https://www.songsterr.com/a/ra/songs/byartists.json?artiosts=' + artist;

    fetch(apimusic)
    .then(function (response){
        if (response.ok) {
            response.json().then(function (data) {
                displaymusicList(data.items, songs);
            })
        }else {
            alert('Error' + response.statusText);
        }
    });

};
>>>>>>> a9e2530894ca937cddcbfe66d41e7a669ff89f13
