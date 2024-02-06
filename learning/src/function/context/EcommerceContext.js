import { createContext, useState } from "react";

export const ItemContext = createContext(null);

export const ItemContextProvider = (props) => {

    const [state, setState] = useState(0);
    const [cart, setCart] = useState([]);

    return (
        <ItemContext.Provider value={{ state, cart, setCart }}>
            {props.children}
        </ItemContext.Provider>
    )
}