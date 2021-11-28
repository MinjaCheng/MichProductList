import React, { FC, useContext } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Product from '../Components/Product';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../helpers/types';
import { AppContext, Item } from '../context/AppContext';
import { translate } from '../helpers/translation/translation';
import { tokens } from '../helpers/translation/appStructure';


const HomeScreen: FC<NativeStackScreenProps<StackScreens, "Home">> = (props) => {
    const context = useContext(AppContext);

    const deleteProduct = (name: string) => {
        if (context?.items) {
            const filteredData = context?.items.filter(item => item.name !== name);
            context?.setItems(filteredData);
        }
    }

    const render = ({ item }: { item: Item }) => {
        return (
            <Product
                item={item}
                onEdit={() => {
                    props.navigation.navigate("AddorEdit", {
                        title: translate(tokens.screens.homeScreen.editProductNavigationTitle), 
                        addProduct: false,
                        productName: item.name,
                        productType: item.type,
                        productPrice: item.price.toString()
                    })
                }}
                onDelete={() => {
                    Alert.alert("", translate(tokens.screens.homeScreen.deleteInfo), [
                        {
                            text: translate(tokens.screens.homeScreen.cancelButton)
                        }, {
                            text: translate(tokens.screens.homeScreen.deleteButton), 
                            onPress: () => {
                                deleteProduct(item.name)
                            }
                        }
                    ])
                }}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>{translate(tokens.screens.homeScreen.mainText)}</Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>{translate(tokens.screens.homeScreen.productName)}</Text>
                <Text style={styles.subtitleText}>{translate(tokens.screens.homeScreen.productType)}</Text>
                <Text style={styles.subtitleText}>{translate(tokens.screens.homeScreen.productPrice)}</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginHorizontal: 5,
                }}
            />
            <View style={styles.listContainer}>
                <FlatList
                    ListEmptyComponent={<Text style={styles.listTextInfo}>{translate(tokens.screens.homeScreen.noProductInfo)}</Text>}
                    data={context?.items}
                    renderItem={render}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.addButtonContainer}>
                <Ionicons onPress={() => {
                    props.navigation.navigate("AddorEdit", {
                        title: translate(tokens.screens.homeScreen.createNewProductTitle),
                        addProduct: true, productName: "",
                        productType: "Product Type",
                        productPrice: ""
                    })
                }}
                    name='add-circle' size={65} color='purple' />
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