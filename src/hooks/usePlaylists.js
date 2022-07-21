import { useState } from "react";
import getPlayList from "../api";

const usePlaylists = () => {
    const [state, setState] = useState({
        playlists: {},
        favourites: [],
        recentPlaylists: []
    });

    const getPlayListById = async (playListId, force=false) => {
        if(state.playlists[playListId] && !force) {
            return;
        }

        let result = await getPlayList(playListId);

        let cid, ct;

        result.map((item) => {
            // Resizing data size
            const { channelId, channelTitle, title, thumbnails: {medium}, description} = item.snippet;

            if(!cid) cid = channelId;

            if(!ct) ct = channelTitle;

            return {
                title, thumbnail: medium, description, contentDetails: item.contentDetails
            }
        })

        setState((prev) => ({
            ...prev,
			playlists: {
				...prev.playlists,
				[playListId]: {
					items: result,
					playlistId: playListId,
					channelId: cid,
					channelTitle: ct,
				},
			},
        }))
    }

    const addToFavourites = (playListId) => {
        setState((prev) => ({
            ...prev,
            favourites: [...prev.favourites, playListId]
        }))
    }

    const addToRecent = (playListId) => {
        setState((prev) => ({
            ...prev,
            recentPlaylists: [...prev.recentPlaylists, playListId]
        }))
    }

    const getPlaylistsByIds = ( ids = []) => {
        return ids.map((id) => state.playlists[id]);
    }

    return {
        playlists: state.playlists,
        favourites: getPlaylistsByIds(state.favourites),
        recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
        getPlayListById,
        addToFavourites,
        addToRecent,
        getPlaylistsByIds
    }
}

export default usePlaylists;