import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Items</Text>
            <View>
                <Text>Name</Text>
                <Text>Type</Text>
                <Text>Price</Text>
            </View>
            <View>
                <Text>Apples</Text>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });