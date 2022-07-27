import { useEffect, useState } from "react";
import getPlayList from "../api";
import storage from "../utils/storage";
// import useLocalStorage from "./useLocalStorage";

const STORAGE_KEY = import.meta.env.VITE_LOCALSTORAGE_KEY;
const INITIAL_STATE = {
    playlists: {},
    favourites: [],
    recentPlaylists: []
}

// TODO:: Implement useLocalStorag Hook

/**
 * Hook: usePlaylists()
 * You have set STORAGE_KEY in your envirnment file
 */
const usePlaylists = () => {
    const [state, setState] = useState(INITIAL_STATE);
    const [error, SetError] = useState('');
    const [loading, setLoading] = useState(false);

    // const { localStorageState, setLocalStorageState } = useLocalStorage(INITIAL_STATE);

    useEffect(() => {
        const state = storage.get(STORAGE_KEY);
        if(state) {
            setState({ ...state });
        }
        // setState(localStorageState)
    }, [])

    useEffect(() => {
        if(state !== INITIAL_STATE) {
            storage.store(STORAGE_KEY, state)
        }

        // if(state !== INITIAL_STATE) {
        //     setLocalStorageState({ ...state })
        // }
        
    }, [state])

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