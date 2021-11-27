import { Ionicons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC, useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Product from '../Components/Product'
import { AppContext, Item } from '../context/AppContext'
import { StackScreens } from '../helpers/types'


const AddorEditScreen: FC<NativeStackScreenProps<StackScreens, "AddorEdit">> = (props) => {

    const params = props.route.params;
    const context = useContext(AppContext);
    const [disable, setDisable] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [selectedProductType, setSelectedProductType] = useState("Product Type");
    const [showIntegratedInfo, setShowIntegratedInfo] = useState(false);

    useEffect(() => {
        setName(params.productName);
        setSelectedProductType(params.productType);
        setPrice(params.productPrice.toString());
    }, [])

    useEffect(() => {
        if (name.length === 0 || price === "" || price === "0" || selectedProductType === "Product Type") {
            setDisable(true);
        }
        else if (selectedProductType === "Integrated" && parseInt(price) >= 1000 && parseInt(price) <= 2600) {
            setDisable(false);
            setShowIntegratedInfo(false);

        } else if (selectedProductType === "Integrated" && parseInt(price) < 1000 || parseInt(price) > 2600) {
            setShowIntegratedInfo(true);
        }
        else if (selectedProductType === "Perpherial" && parseInt(price) > 0) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }, [name, price, selectedProductType]);

    const createNewProduct = () => {
        const priceInt = parseInt(price);
        const newItem = [...context!.items, { name: name, type: selectedProductType, price: priceInt }]
        context?.setItems(newItem)
        props.navigation.navigate("Home");
    }

    const editProduct = (updateProduct: Item) => {
        context?.items.filter((currentProduct: Item) => {
            if (currentProduct.name != updateProduct.name) {
                currentProduct.name = updateProduct.name;
                currentProduct.type = updateProduct.type;
                currentProduct.price = updateProduct.price;
                context?.setItems([...context.items]);
                props.navigation.navigate("Home");
            } else {

            }

        });

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{params.title}</Text>
            <TextInput placeholder="Name" onChangeText={setName} defaultValue={name} style={styles.input} />
            <Picker style={[styles.input, { color: 'grey' }]}
                selectedValue={selectedProductType}
                onValueChange={(itemValue, itemIndex) => setSelectedProductType(itemValue)

                }>
                <Picker.Item label="Product Type" value="Product Type" />
                <Picker.Item label="Integrated" value="Integrated" />
                <Picker.Item label="Perpherial" value="Perpherial" />
            </Picker>
            <TextInput placeholder="Price" keyboardType='numeric' onChangeText={(number) => { setPrice(number) }} defaultValue={price} style={styles.input} />
            {showIntegratedInfo && (<Text style={styles.textInfoIntegrated}>Integrated products may be anywhere within the range of 1000 to 2600 dollars.</Text>)}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.buttonSave, { backgroundColor: disable ? 'rgba(52, 52, 52, 0.15)' : 'green' }]} disabled={disable} onPress={() => {
                    if (params.addProduct) {
                        if (context?.items.length == 0) {
                            createNewProduct()
                        } 
                        else {
                            for (let product of context!.items) {
                                
                                if (product.name != name) {
                                    createNewProduct()
                                }
                            }
                        }
                    } else {
                        editProduct({
                            name: name,
                            type: selectedProductType,
                            price: parseInt(price)
                        })
                    }
                }
                }>
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

export default AddorEditScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        marginTop: 40,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    textInfoIntegrated: {
        fontSize: 12,
        color: 'red',
        paddingHorizontal: 35,
        paddingTop: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-evenly',
        marginTop: 30,
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
