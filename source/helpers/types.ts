import { Item } from "../context/AppContext";

export type StackScreens = {
    Home: undefined;
    AddorEdit: { 
        title: string, 
        addProduct?: Boolean,
        productName: string ,
        productType: string,
        productPrice: string
    };
}