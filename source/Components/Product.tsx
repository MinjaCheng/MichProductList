import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export interface IProduct {
    name: string;
    type: string;
    price: number;
}

const Product: React.FC<IProduct> = (props) => {
    return (
        <View style={styles.productContainer}>
                <Text >{props.name}</Text>
                <Text>{props.type}</Text>
                <Text>{props.price}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Ionicons style={{ paddingRight: 15 }} name="create-outline" size={20} />
                <Ionicons name="trash-outline" size={20} />
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        //alignItems: 'center',
        width: "100%",
        justifyContent: "space-evenly",
        alignContent: 'flex-start',
        padding: 10,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5,
    },
})
