/**
 * Local Storage
 */

class Storage {
    get(key){
        const data = localStorage.getItem(key);
        return JSON.parse(data)
    }

    store(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

const storage = new Storage();

export default storage;