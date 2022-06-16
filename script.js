var yourList = document.getElementById('songList');
var artistInputEl = document.querySelector('#artistName');
var timeDisplay = document.getElementById('timeDisplay');

var formSubmitHandler = function (event) {
    event.preventDefault();

    var songs = artistInputEl.value.trim();
    
    if(songs) {
        artistSonglist(songs);

        document.getElementById('songList').textContent = '';
        artistInputEl.value = '';
    } else {
        alert('Try searching someone else');
    }
};

var artistSonglist = function(artist) {
    var apimusic = "https://www.songsterr.com/a/ra/songs/byartists.json?artists=" + artist;

    fetch (apimusic, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow',
    })

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        for (var i = 0; i < data.length; i++) {

            var listItem = document.createElement('li');
            listItem.textContent = data[i].title;
            yourList.appendChild(listItem);
        }


    })
};




artistInputEl.addEventListener('click', formSubmitHandler);

fetch('http://worldtimeapi.org/api/ip', {
    method:'GET',
    credentials:'same-origin',
    redirect: 'follow',
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data.datetime);

    var timelist = document.createElement('div');
    timelist.textContent = data.datetime;
    timeDisplay.appendChild(timelist);
    
});
