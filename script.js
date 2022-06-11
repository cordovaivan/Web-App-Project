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