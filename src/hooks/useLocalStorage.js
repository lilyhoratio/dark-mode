import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {

    // if you have a value already, you can give useState a callback instead of a value
    // const [storedValue, setStoredValue] = useState(value)
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        //item is a string so you want to return it back to correct data type
        return JSON.parse(item) ? item : initialValue;
    })
}

export default useLocalStorage;