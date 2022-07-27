import { useEffect, useState } from "react";

const STORAGE_KEY = import.meta.env.VITE_LOCALSTORAGE_KEY;

const useLocalStorage = ({ INITIAL_STATE }) => {
    const [state, setState] = useState(() => {
        const storeValue = localStorage.getItem(STORAGE_KEY);
        return storeValue ? JSON.parse(storeValue) : INITIAL_STATE;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }, [state]);

    return { state: localStorageState, setState: setLocalStorageState }

}

export default useLocalStorage;