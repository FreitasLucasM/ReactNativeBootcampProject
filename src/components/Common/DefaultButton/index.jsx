import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height
}) {
    
  return (
    <TouchableOpacity
    style={[styles.button, { width: width, height: height }]}
    activeOpacity={0.7}
    onPress={handlePress}>
        <Text style={styles.buttonText}> {buttonText}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fafafa',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 20,
    },
    buttonText:{
        color:'#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    }
})
