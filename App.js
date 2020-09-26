import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import teste from './src/utils/colors'
import colors from './src/utils/colors';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.safeArea}>
      <Text>Formulário HEAD</Text>
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
    alignItems: "center"
  },
});
