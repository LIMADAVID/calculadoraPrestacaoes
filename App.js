import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Constants from "expo-constants"
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView
} from 'react-native'
import Form from './src/components/Form'
import Footer from './src/components/Footer'
import ResultCalculo from './src/components/ResultCalculo'
import colors from './src/utils/colors'


export default function App() {
  const [capital, setCapital] = useState(null)
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if(capital && interest && months) calcular()
    else reset()
  }, [capital, interest, months])

  const calcular = () => {
    reset();
    if(!capital) {
      setErrorMessage('Informe a quantidade a ser solicitada.')
    } else if(!interest) {
      setErrorMessage('Informe a porcentagem')
    } else if(!months) {
      setErrorMessage('Selecione a quantidade de meses que deseja pagar')
    } else {
      const i = interest / 100
      const fee = capital / ((1 - Math.pow(i + 1, - months)) / i)

      setTotal({
        monthlyFee: fee.toFixed(2).replace('.',','),
        totalPayable: (fee * months).toFixed(2).replace('.',',')
      })
    }
  }

  const reset = () => {
    setErrorMessage('')
    setTotal(null)
  }

  return (
    <>
    <StatusBar  style='light'/>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      <Text style={styles.titleApp}>Calculadora de Prestações</Text>
      <Form 
        setCapital={setCapital}
        setInterest={setInterest}
        setMonths={setMonths}
      />
    </SafeAreaView>
    <ResultCalculo 
    capital={capital}
    interest={interest}
    months={months}
    total={total}
    errorMessage={errorMessage}
    />
    <Footer calcular={calcular}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,    
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1
  }
});
