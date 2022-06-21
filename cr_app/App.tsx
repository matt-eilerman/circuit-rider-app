/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const App = () => {

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.dummie}>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  dummie: {
    fontSize: 100
  }
})

export default App
