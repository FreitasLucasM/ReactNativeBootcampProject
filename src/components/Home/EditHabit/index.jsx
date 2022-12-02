import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


export default function EditHabit({habit, frequency, habitArea, checkColor}) {

    function handleEdit(){
        console.log('botão de editar clicado')
    }
    function handleCheck(){
        console.log(`botão de check do ${habitarea}`)
    }

  return (
    <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={()=>{handleEdit}}>
        <View style={styles.habitText}>
            <Text style={styles.habitTitle}>
                {habit}
            </Text>
            <Text style={style.habitFrequency}>
                {frequency}
            </Text>
        </View>
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.check, {borderColor: checkColor}]}
            onPress={handleCheck}>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#151515',
        borderRadius: 5,
        width: 320,
        marginVertical: 10,
        paddingvertical: 10,
        paddingHorizontal: 20,
        flexDirection: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    habitTitle:{
        color: 'white',
        fontWeight: 'bold'
    },
    habitFrequency: {
        color: 'white'
    },
    check: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10
    }
})