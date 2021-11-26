import { Ionicons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Item } from '../context/AppContext'

interface IProduct {
    item: Item,
    edit: () => void,
    onDelete: () => void,
}

const Product: FC<IProduct> = (props) => {
    return (
        <View style={styles.productContainer}>
                <Text style={{ width: '28%'}}>{props.item.name}</Text>
                <Text style={{ width: '28%', paddingStart:5}}>{props.item.type}</Text>
                <Text style={{ width: '28%', paddingStart:8}}>$ {props.item.price.toFixed(2)}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Ionicons style={{ paddingRight: 15 }} name="create-outline" size={20} onPress = {() => {props.edit()}}/>
                <Ionicons name="trash-outline" size={20} onPress = {() => {props.onDelete()}} />
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        width: "100%",
        padding: 10,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5,
    },
})
