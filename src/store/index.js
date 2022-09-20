import { createStore } from 'easy-peasy';
import playlistsModel from './playlistsModel';
import favouritesModel from './favouritesModel';
import recentModel from './recentModel';

const store = createStore({
    playlists: playlistsModel,
    favourites: favouritesModel,
    recentPlaylists: recentModel
});

export default store;