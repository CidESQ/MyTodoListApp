import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react'
import Task from './components/Task'

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* Mostrar las tareas */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>
            Today's Tasks
          </Text>
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return(
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item}/>
                  </TouchableOpacity>
                );
              })
            }
          </View>
        </View>
      </ScrollView>

      {/* Escribir una nueva tarea*/}
      <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height" }
       style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#604848',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 35
  },
  items:{
    marginTop: 10
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#789048",
    borderRadius: 60,
    borderColor: '#607848',
    borderWidth: 2,
    width: 250
  },
  addWrapper:{
    width: 50,
    height: 50,
    backgroundColor: "#789048",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#607848',
    borderWidth: 2,

  },
  addText:{
    fontSize: 30,
    color: "#604848"
  }
});
