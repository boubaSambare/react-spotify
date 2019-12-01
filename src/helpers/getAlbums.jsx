import { ALBUM_URL, ARTIST_URL, SEARCH_URL } from "./endpoint/apiUrl";

export const getAlbums = async (search, limit=4) => {
  const initHeader = {
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "3add489984mshcdfd14eb79a1736p132c4cjsn95b0774294c4"
    }
  };
  try {
    let request = await fetch(SEARCH_URL + search +`&limit=${limit}`, initHeader);
    return await request.json()
  } catch (error) {
      console.log('SEARCH FECHT ERROR', error)
  }
};


export const getSingleAlbum = async albumId => {
    const initHeader = {
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "3add489984mshcdfd14eb79a1736p132c4cjsn95b0774294c4"
      }
    };
    try {
      let request = await fetch(ALBUM_URL + albumId, initHeader);
      return await request.json()
    } catch (error) {
        console.log('ALBUMS FECHT ERROR', error)
    }
  };
  
  export const getArtist = async artist => {
    const initHeader = {
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "3add489984mshcdfd14eb79a1736p132c4cjsn95b0774294c4"
      }
    };
    try {
      let request = await fetch(ARTIST_URL + artist, initHeader);
      return await request.json()
    } catch (error) {
        console.log('ARTIST FECHT ERROR', error)
    }
  };
  