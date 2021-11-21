import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>Items</Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>Name</Text>
                <Text style={styles.subtitleText}>Type</Text>
                <Text style={styles.subtitleText}>Price</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginHorizontal: 5,
                }}
            />
            <View style={styles.listContainer}>

                <View style={styles.productListRow}>
                    <Text>Name</Text>
                    <Text>Type</Text>
                    <Text>Price</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Ionicons style={{paddingRight: 15}} name="create-outline" size={20} />
                        <Ionicons name="trash-outline" size={20} />
                    </View>

                </View>
                <Text style={styles.listTextInfo}>You do not have any products. Press the purple button below to add a new product.</Text>
            </View>
            <View style={styles.addButtonContainer}>
                <Ionicons name='add-circle' size={65} color='purple' />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainTextContainer: {
        height: 60,
        backgroundColor: "purple",
        justifyContent: 'center',
    },
    mainText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    subtitleContainer: {
        height: 35,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 130
    },
    subtitleText: {
        fontWeight: 'bold'
    },
    listContainer: {
        flex: 1,
        alignItems: "center",
        //justifyContent: "center",
        margin: 5,
    },
    productListRow: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        //alignContent: 'flex-start',
        padding: 10,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5,
    },
    listTextInfo: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center',
        marginTop: 150,
        padding: 50,
    },
    addButtonContainer: {
        alignItems: 'flex-end',
    },
});