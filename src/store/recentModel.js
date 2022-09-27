import { action, persist } from "easy-peasy";

const recentModel = persist({
    items: [],

    addToRecent: action((state, playListId) => {
        if(!state.items.includes(playListId)) {
            state.items.unshift(playListId);
        }
        if(state.items.length > 4) {
            state.items.slice(0,8);
        }
    }),
    removeFromRecent: action((state, playListId) => {
        if (!state.items.includes(playListId)) {
            return;
        }
        state.items = state.items.filter((item) => item != playListId)
    })
});

export default recentModel;