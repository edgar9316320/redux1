import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import Productos from '../components/productos';

export function HomeScreen({ navigation }) {

    
    return (
        <View style={styles.lista}>
                <Text>HProductos</Text>
                <Productos />
                <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
                />
        </View>
      
    );
}


const styles = StyleSheet.create({
    lista: {
      flex: 1,
      marginVertical: 30,
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });