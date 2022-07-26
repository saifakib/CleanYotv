import { useState } from "react";
import getPlayList from "../api";

const usePlaylists = () => {
    const [state, setState] = useState({
        playlists: {},
        favourites: [],
        recentPlaylists: []
    });
    const [error, SetError] = useState('');
    const [loading, setLoading] = useState(false)

    const getPlayListById = async (playListId, force=false) => {
        if(state.playlists[playListId] && !force) {
            return;
        }

        setLoading(true)
        try {
            const playLists = await getPlayList(playListId);
            setState((prev) => ({
                ...prev,
                playlists: {
                    ...prev.playlists,
                    [playListId]: playLists
                }
            }))
            SetError('');
        } catch(err) {
            SetError(err.response?.data?.error?.message || "Something went wrong !!")
        } finally {
            setLoading(false)
        }
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
        getPlaylistsByIds,
        error,
        loading
    }
}

export default usePlaylists;