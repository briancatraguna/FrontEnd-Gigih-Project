

function myFunction() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const message = "The title is " + title + " and the description is " + description + ".";
    alert(message);
}

axios
.get("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
.then((response)=>{
    console.log(response.data.album.artists[0].name);
    console.log(response.data.album.images[0].url);

    let albumImg = document.getElementById("imageAlbum");
    let trackTitle = document.getElementById("trackTitle");
    let artist = document.getElementById("artists");
    let album = document.getElementById("albums");

    albumImg.src = response.data.album.images[0].url;
    trackTitle.innerHTML = response.data.name;
    artist.innerHTML = response.data.album.artists[0].name;
    album.innerHTML = response.data.album.name;
})
.catch((error)=>{
    alert(`API Call Error: ${error}`);
});