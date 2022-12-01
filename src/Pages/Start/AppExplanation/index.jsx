import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import DefaultButton from '../../../components/Common/DefaultButton'
import ExplanationCard from "../../../components/Explanation/ExplanationCard"
export default function AppExplanation() {

    const handleSetShowHome = ()=>{
        console.log('botao clicado')
}
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems:'center'}}>
            <Text style={styles.title}>
                Antes, deixa {'\n'} eu te explicar...
            </Text>
            <ExplanationCard/>
            <Text style={styles.descriptionCA}>
                Pronto(a) pra subir de nivel na vida ?
            </Text>
            <Text style={styles.description}>
                Na proxima tela você vai poder escolher {'\n'} seus 4 hábitos de forma individual
            </Text>
            <DefaultButton
                buttonText={"Continuar"}
                handlePress={handleSetShowHome}
                width={250}
                height={50}
            />
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#212121'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'white',
        textAlign:'center',
        marginVertical: 40

    },
    descriptionCA:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop:20,
        marginBottom:10
    },
    description:{
        color: 'white',
        textAlign:'center',
        marginBottom: 30
    }
})