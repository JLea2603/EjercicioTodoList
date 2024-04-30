import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignContent: 'center',
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'black',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    borderRadius: 29,
    padding: 10,
    marginRight: 30,
    marginBottom: 16,
    fontSize: 20,
    height: 57,
    textAlign: 'left',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#646464',
    color: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#232323',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 19,
  },
  textInput: {
    backgroundColor: '#525252',
    fontSize: 20,
    flex: 1,
    marginRight: 40,
    borderWidth: 1,
    borderColor: '#525252',
    borderRadius: 16,
    padding: 5,
    color: '#FFFFFF',
  },
  btn: {
    backgroundColor: '#09CE00',
    height: 47,
    marginRight: 20,
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 7
  },
  image: {
    width: 39, // Ancho de la imagen
    height: 30, // Alto de la imagen
    resizeMode: 'contain', // Ajuste de la imagen dentro del tamaño especificado
  },
  image2: {
    width: 60,
    height: 60,
    resizeMode: 'contain', // Ajuste de la imagen dentro del tamaño especificado
  },
  deleteButton: {
    backgroundColor: '#13213C',
    padding: 10,
    borderRadius: 5,
    width: 35,
    height: 40,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, title: 'TODO LIST' }]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      Alert.alert(
        'Tarea Añadida',
        `Se ha añadido su tarea`,
        [{ text: 'OK', }]
      );
      setTasks([...tasks, { id: tasks.length + 1, title: task }]);
      setTask('');
    } else {
      Alert.alert(
        'Campo Vacío',
        'Por favor ingrese una tarea antes de añadir.'
      );
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/portapapeles.png')} style={styles.image2} />
      <Text style={styles.title}>TODO LIST</Text>
      <ScrollView>
        {tasks.slice(1).map((task) => ( // Slice para omitir el título en la lista
          <Text key={task.id} style={styles.item}>{task.title}
            <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}> X </Text>
            </TouchableOpacity>
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={task}
          onChangeText={setTask}
          placeholderTextColor={'white'}
          placeholder="Añadir una nueva tarea"
        />
        <TouchableOpacity style={styles.btn} onPress={handleAddTask}>
          <Image source={require('./assets/boton-agregar.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoList;
