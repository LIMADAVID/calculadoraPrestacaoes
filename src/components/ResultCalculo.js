import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ResultCalculo(props){
    const {capital, interest, months, total, errorMessage} = props;

    return (
        <View style={styles.content}> 
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Resumo</Text>
                    <DataResult title={'Quantidade solicitada:'} value={`R$ ${capital}`} />
                    <DataResult title={'Porcentagem %:'} value={`${interest} %`} />
                    <DataResult title={'Prazo:'} value={`${months} meses`} />
                    <DataResult title={'Pagamento mensal:'} value={`R$ ${total.monthlyFee}`} />
                    <DataResult title={'Pagamento total:'} value={`R$ ${total.totalPayable}`} />
                </View>    
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )

}

function DataResult(props) {
    const {title, value} = props
    
    return(
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginHorizontal: 40
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20
    },
    boxResult: {
        padding: 0
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
})