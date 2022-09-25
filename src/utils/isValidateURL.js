
const playlist_id = (url) => {
    var regPlaylist = /[?&]list=([^#\&\?]+)/;
    var match = url.match(regPlaylist);
    return match[1];
}

const getPlayList_id = (urlString) => {
    let url;
    try {
      url = new URL(urlString);
    } catch (e) {
      return urlString;
    }
    return url.protocol === "http:" || url.protocol === "https:" ? playlist_id(urlString) : urlString;
}

export default getPlayList_id;