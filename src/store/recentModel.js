import { action, persist } from "easy-peasy";

const recentModel = persist({
    items: [],

    addToRecent: action((state, playListId) => {
        state.items.unshift(playListId);
        state.items.slice(0,8);
    })
});

export default recentModel;