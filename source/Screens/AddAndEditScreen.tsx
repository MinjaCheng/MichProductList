import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { StackScreens } from '../helpers/types'

const AddAndEditScreen: FC<NativeStackScreenProps<StackScreens, "Add">> = (props) => {

    const params = props.route.params;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{params.title}</Text>
            <TextInput placeholder="Name" onChangeText={setName} style={styles.input} />
            <Text style={[styles.input, { padding: 20, color: 'grey' }]} onPress={() => { }}>Product Type</Text>
            <TextInput placeholder="Price" onChangeText={setPrice} style={styles.input} />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSave}>
                    <Text style={styles.textButtonSave} onPress={() => { }}>SAVE</Text>
                    <Ionicons name='download-outline' size={32} color="white" />
                </View>
                <View style={styles.buttonCancel}>
                    <Text style={styles.textButtonCancel} onPress={() => { }}>CANCEL</Text>
                    <Ionicons name='close-circle-outline' size={33} />
                </View>
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
        backgroundColor: 'green',
        width: "45%",
        padding: 5,
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
