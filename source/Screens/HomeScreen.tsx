import React, { FC, useContext } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Product from '../Components/Product';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../helpers/types';
import { AppContext, Item } from '../context/AppContext';


const HomeScreen: FC<NativeStackScreenProps<StackScreens, "Home">> = (props) => {
    const context = useContext(AppContext);

    const render = ({ item }: { item: Item }) => (
        <Product name={item.name} type={item.type} price={item.price} />   
    );

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
            {true && (<FlatList
                    data={context?.items}
                    renderItem={render}
                    keyExtractor={(item, index) => index.toString()}
                />)}
                {false && (
                <Text style={styles.listTextInfo}>You do not have any products. Press the purple button below to add a new product.</Text> )
            }</View>
            <View style={styles.addButtonContainer}>
                <Ionicons onPress={() => { props.navigation.navigate("AddorEdit", { title: "Create New Product" }); }} name='add-circle' size={65} color='purple' />
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
        marginTop: 38,
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