import {useEffect, useState} from "react";

export function useGetCharacters() {
    const [characters, setCharacters] = useState()

    useEffect(() => {
        setCharacters()
    }, []);
    return characters;
}