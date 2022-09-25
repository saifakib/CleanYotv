import { action, persist } from "easy-peasy";

const recentModel = persist({
    items: [],

    addToRecent: action((state, playListId) => {
        state.items.unshift(playListId);
        state.items.slice(0,8);
    }),
    removeFromRecent: action((state, playListId) => {
        state.items = state.items.filter((item) => item != playListId)
    })
});

export default recentModel;