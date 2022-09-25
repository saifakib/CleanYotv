import { action, thunk, persist } from "easy-peasy";
import getPlayList from "../api";

const playlistsModel = persist({
  data: {},
  error: '',
  loading: false,

  setError: action((state, payload) => {
    state.error = payload;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  addPlaylists: action((state, payload) => {
    state.data[payload.playListId] = payload;
  }),
  removePlaylists: action((state, payload) => {
    delete state.data[payload];
  }),
  
  getPlayLists: thunk( async ({addPlaylists, setError, setLoading}, playListId, {getState}) =>{
    if(getState().data[playListId]) {
      return;
    }
    setLoading(true);
    try {
      const playlist = await getPlayList(playListId);
      addPlaylists(playlist);
    } catch (err) {
      setError(err.response?.data?.error?.message || "Something went wrong !!")
    } finally {
      setLoading(false);
    }
  })
});

export default playlistsModel;
