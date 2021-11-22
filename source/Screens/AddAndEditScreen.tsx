import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC, useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AppContext } from '../context/AppContext'
import { StackScreens } from '../helpers/types'
import Dialog, { DialogContent } from 'react-native-popup-dialog';

const AddAndEditScreen: FC<NativeStackScreenProps<StackScreens, "Add">> = (props) => {

    const params = props.route.params;
    const context = useContext(AppContext);
    const [disable, setDisable] = useState(false);

    const defaultProducts = [
        {
            name: "Apple",
            type: "Interger",
            price: 2.50
        },
        {
            name: "Orange",
            type: "Interger",
            price: 5.00
        },
        {
            name: "Grapes",
            type: "Interger",
            price: 20.00
        }
    ];

    const [allProducts, setAllProducts] = useState(defaultProducts);
    const [name, setName] = useState("");
    const [productType, setProductType] = useState("Product Type");
    const [price, setPrice] = useState(0);


    useEffect(() => {
        
    }, [])

    const addProduct = () => {
        //setAllProducts([...allProducts, { name: name, type: productType, price: price }])
        context?.addProduct({ name: name, type: productType, price: price })
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{params.title}</Text>
            <TextInput placeholder="Name" onChangeText={setName} style={styles.input} />
            <Text style={[styles.input, { padding: 20, color: 'grey' }]} onPress={() => { }}>{productType}</Text>
            <TextInput placeholder="Price" keyboardType='numeric' onChangeText={(text) => { setPrice(parseFloat(text)) }} style={styles.input} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.buttonSave, { backgroundColor: disable ? 'rgba(52, 52, 52, 0.15)' : 'green' }]} disabled={disable} onPress={addProduct}>
                    <Text style={styles.textButtonSave}>SAVE</Text>
                    <Ionicons name='download-outline' size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel} onPress={() => { props.navigation.pop() }}>
                    <Text style={styles.textButtonCancel}>CANCEL</Text>
                    <Ionicons name='close-circle-outline' size={33} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddAndEditScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    title: {
        marginTop: "35%",
        marginBottom: 20,
        fontSize: 23,
        fontWeight: 'bold',
    },
    input: {
        width: "90%",
        padding: 15,
        margin: 18,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    buttonSave: {
        flexDirection: 'row',
        width: "45%",
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
    },
    textButtonSave: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 5,
        color: "white"
    },
    buttonCancel: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        width: "45%",
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
    },
    textButtonCancel: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 5,
    },
})
