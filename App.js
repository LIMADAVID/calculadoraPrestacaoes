import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Constants from "expo-constants"
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Form from './src/components/Form'
import colors from './src/utils/colors'


export default function App() {
  return (
    <>
    <StatusBar  style='light'/>
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Calculadora de Prestações</Text>
      <Form />
    </SafeAreaView>
    <View>
      <Text>Resultado</Text>  
    </View>
    <View>
      <Text>Footer</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,    
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  }
});
