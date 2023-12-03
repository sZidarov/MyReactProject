import { useState } from "react";

// This custom hook solves the problem of needing to keep the login state after refreshing the page
export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        // The goal here is to be able to hadle given functions to set the state
        
        let serializedValue; 

        if (typeof value === "function") {
            serializedValue = JSON.stringify(value(state)); // This word means value converted to string so it can be kept in localStorage
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    };

    return [state, setPersistedState];
}
