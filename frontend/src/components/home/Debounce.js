import {useState} from "react";

const useDebounce = ({defaultTimeout = 250, defaultIdentifier = 'default'} = {}) => {

    const [identifiers, setIdentifiers] = useState({[defaultIdentifier]: null});

    return ({fn = null, identifier = defaultIdentifier, timeout = defaultTimeout} = {}) => {
        if (identifiers.hasOwnProperty(identifier)) clearTimeout(identifiers[identifier]);
        setIdentifiers({...identifiers, [identifier]: setTimeout(fn, timeout)});
    };
};

export default useDebounce;