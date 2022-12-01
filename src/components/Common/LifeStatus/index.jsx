import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native'

/*
Status:
100 - Maximo
50 - Médio
25 - Baixo
00 - Curto (acabou o game)
*/

export default function LifeStatus() {
  return (
    <View style={styles.container}>
      <Lottie source={require("./../../../assets/education/education-100.json")}
      autoPlay
      loop
      style={styles.educacaoAnimacao}
      />
      <Lottie source={require("./../../../assets/money/money-100.json")}
      autoPlay
      loop
      style={styles.financasAnimacao}
      />
      <Lottie source={require("./../../../assets/robot/robot-100-100.json")}
      autoPlay
      loop
      style={styles.robotAnimacao}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 300,
        height: 300,
    },
    robotAnimacao:{
        width: 190,
        marginTop:30,
        marginLeft: 25,
    },
    educacaoAnimacao:{
        width: 100,
        marginTop:50,
        marginLeft: 5,
        position: 'absolute'
    },
    financasAnimacao:{
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: 'absolute'
    }
})