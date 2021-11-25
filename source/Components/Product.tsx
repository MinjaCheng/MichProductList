import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Item } from '../context/AppContext'

const Product: React.FC<Item> = (props) => {
    return (
        <View style={styles.productContainer}>
                <Text style={{ width: '28%'}}>{props.name}</Text>
                <Text style={{ width: '28%', paddingStart:5}}>{props.type}</Text>
                <Text style={{ width: '28%', paddingStart:8}}>$ {props.price.toFixed(2)}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Ionicons style={{ paddingRight: 15 }} name="create-outline" size={20} />
                <Ionicons name="trash-outline" size={20} onPress = {() => {}} />
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
