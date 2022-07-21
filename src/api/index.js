import axios from "axios";

const key = 'AIzaSyCtNCP2dPlKNEHOV5p-1Vrn0Wmn0vU-CnA';

const getPlayList = async (playListId, nextPageToken='', lists=[]) => {
    const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,id,snippet&key=${key}&maxResults=50&playlistId=${playListId}&pageToken=${nextPageToken}`;

    const { data } = await axios.get(URL);
    lists = [ ...lists, ...data.items ];

    if(data.nextPageToken) {
        lists = getPlayList(playListId, data.nextPageToken, lists);
    }

    return lists;
}

export default getPlayList;