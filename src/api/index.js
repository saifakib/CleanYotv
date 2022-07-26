import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlayListItems = async (playListId, nextPageToken='', lists=[]) => {
    const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,id,snippet&key=${key}&maxResults=50&playlistId=${playListId}&pageToken=${nextPageToken}`;

    const { data } = await axios.get(URL);
    lists = [ ...lists, ...data.items ];

    if(data.nextPageToken) {
        lists = getPlayList(playListId, data.nextPageToken, lists);
    }

    return lists;
}

const getPlayList = async (playListId) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playListId}&key=${key}`;

    const { data } = await axios.get(URL);
    let playlistItems = await getPlayListItems(playListId);

    const { title: playListTitle, description: playListDescription, thumbnails, channelId, channelTitle } = data?.items[0]?.snippet;

    playlistItems = playlistItems.map((item) => {
        // Resizing item size
		const { title, thumbnails: { medium }, description} = item.snippet;
		return {
			title,
			description,
			thumbnail: medium,
		};
	});
    
    return {
        playListId,
        playListTitle,
        playListDescription,
        playListThumnails: thumbnails.default,
        channelId,
        channelTitle,
        playlistItems
    }
}

export default getPlayList;