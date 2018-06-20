// write a function to retireve a blob of json
// make an ajax request! User the fetch function.
// htts://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
// 	fetch('htts://rallycoding.herokuapp.com/api/music_albums')
// 		.then(res => res.json())
// 	  .then(json => console.log(json));
// }

const fetchAlbums = async () => {
	const res = await fetch('htts://rallycoding.herokuapp.com/api/music_albums')
	const json = await res.json()
	
	console.log(json);
}

fetchAlbums();
