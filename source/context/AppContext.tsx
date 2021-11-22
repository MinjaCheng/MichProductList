import React, {createContext, FC, useState } from "react";
import { PressableAndroidRippleConfig } from "react-native";

interface IAppContext {
    productList: any,
    //addProduct: () => {}
    addProduct: (object:any) => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppContextProvider: FC = ({children}) => {
    const [productList, setProductList] = useState<any | any[]>([]);
    const addProduct = (newProduct:Object) => setProductList((productList: any) => [...productList, newProduct])
    console.log(productList);
    return (
        <AppContext.Provider value={{
            productList,
            addProduct
        }}>
            {children}
        </AppContext.Provider>
    )
}