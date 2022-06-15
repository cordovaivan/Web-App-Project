// var displayInfo = document.querySelector ('div')
var artistInputEl = document.querySelector ('#artistName');
var songContainer = document.querySelector ('#songContainer');
var artistsearchTerm = document.querySelector ('#artist-search-term');

// fetch("https://www.songsterr.com/a/ra/songs/byartists.json?artists=Nirvana", {
//     method: 'Get',
//     credentials: 'same-origin',
//     redirect: 'follow',
// })

// .then(function (response){
//     return response.json();
// })

// .then(function (data){
//     console.log(data);
// });



var formSubmitHandler = function (event) {
    event.preventDefault();

    var artistD = artistInputEl.value.trim();
    
    if(artistD) {
        getArtistList(artistD);

        songContainer.textContent = '';
        artistInputEl.value = '';
    } else {
        alert('Try searching someone else');
    }
};

var getArtistList = function (artist) {
    var apimusic = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists=' + artist;

    fetch(apimusic, {
    method: 'Get',
    credentials: 'same-origin',
    redirect: 'follow',
})

.then(function (response){
    return response.json();
})

.then(function (data){
    console.log(data);
    displaymusicList(artist);
});


    // fetch(apimusic)
    // .then(function (response){
    //     if (response.ok) {
    //         console.log(response);
    //         response.json().then(function (data) {
    //             displaymusicList(data.items, artist);
    //         })
    //     }else {
    //         alert('Error' + response.statusText);
    //     }
    // });

};

var displaymusicList = function (artist) {
    if (!artist) {
        songContainer.textContent = 'No Discography found.';
        //return;
        console.log('meow');
    }
    else {
        getArtistList(artist);
    }

    // artistsearchTerm.textContent = searchTerm;

    // for (var i = 0; i < artists.length; i++) {
    //     var songs = songs[i].artist
    // }
};



    artistInputEl.addEventListener('click', formSubmitHandler);


    var getTime = function (Time) {
    var apiTime = 'http://worldtimeapi.org/api/ip';

    fetch(apiTime).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayTime(data);
            });
        } else {
            alert('TimeError: ' + response.statusText);
    }
}
