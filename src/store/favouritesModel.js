import { action, persist } from 'easy-peasy';

const favouritesModel = persist({
    items: [],

    addToFavourites: action((state, playListId) => {
        state.items.push(playListId);
    }),

    removeFromFavourites: action((state, playListId) => {
        state.items = state.items.filter((pid) => pid != playListId);
    })
});

export default favouritesModel;