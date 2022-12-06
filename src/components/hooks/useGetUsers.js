import {useEffect, useState} from "react";
import {url} from '../../settings.json'

export function useGetUsers() {
    const [characters, setCharacters] = useState()

    useEffect(() => {


        setCharacters()
    }, []);
    return characters;
}