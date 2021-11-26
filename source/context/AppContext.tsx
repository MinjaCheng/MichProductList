import React, {createContext, FC, useState } from "react";

export interface Item {
    name: string,
    type: string,
    price: number,
}

interface IAppContext {
    items: Item[],
    setItems: (data: Item[]) => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppContextProvider: FC = ({children}) => {
    const [items, setItems] = useState<Item[]>([]);
    
    return (
        <AppContext.Provider value={{
            items,
            setItems
        }}>
            {children}
        </AppContext.Provider>
    )
}