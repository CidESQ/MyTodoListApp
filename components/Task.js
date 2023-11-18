import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const Task = (props) => {

  return(
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  item:{
    backgroundColor : "#789048",
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square:{
    height: 24,
    width: 24,
    backgroundColor: 'white',
    borderRadius: 5,
    opacity: 0.4,
    marginRight: 15
  },
  itemText:{
    maxWidth: '80%',

  },
  circular:{
    width: 18,
    height: 18,
    borderColor: "white",
    borderRadius: 100,
    borderWidth: 2

  },
});

export default Task;


