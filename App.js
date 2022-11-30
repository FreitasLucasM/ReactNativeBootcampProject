import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Routes from './src/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="ligth" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title:{
    backgroundColor: 'gray',
    fontWeight: '900',
    fontSize: 25, 
  }
});
