import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Routes from './src/Routes';

export default function App() {
  return (
    <>
      
      <StatusBar style="ligth" />
      <Routes/>
    </>
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
