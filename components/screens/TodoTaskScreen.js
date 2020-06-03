import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import Colors from '../../constants/Colors';
import TitleBar from '../layout/TitleBar';
import TodoTaskBar from '../layout/ToDoTaskBar';
import StyledText from '../general/StyledText';
import AddNewTaskModal from '../layout/AddNewTaskModal';
import EditTaskModal from '../layout/EditTaskModal';

const TodoTaskScreen = () => {
    const [toDoTasks, setToDoTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState({})
    const [loading, setLoading] = useState(true)
    const [addNewTaskModalVisible, setAddNewTaskModalVisible] = useState(false)
    const [editTaskModalVisible, setEditTaskModalVisible] = useState(false)
    const openEditModal = selected => () => {
        setSelectedTask(selected)
        setEditTaskModalVisible(true);
    }
    const addNewTask = title => () => {
        firebase.database().ref('todos/').push({ title })
        setAddNewTaskModalVisible(false);
    }
    const editTask = (newTitle, key) => () => {
        firebase.database().ref(`todos/${ key }`).update({ title: newTitle })
        setEditTaskModalVisible(false);
    }
    const deleteTask = task => () => {
        Alert.alert(
            `Task - ${ task.title }`,
            'Are you sure you wanna delete this?',
            [
                {
                    text: 'Yes',
                    onPress: () => firebase.database().ref(`todos/${ task.key }`).remove(),
                },
                {
                    text: 'No',
                    onPress: () => { }
                }
            ],
            { cancelable: false }
        )
    }
    const completeTask = task => () => {
        Alert.alert(
            `Task - ${ task.title }`,
            'Are you sure you wanna mark this as completed?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        firebase.database().ref(`todos/${ task.key }`).remove();
                        firebase.database().ref(`completed/`).push({ title: task.title });
                    },
                },
                {
                    text: 'No',
                    onPress: () => { }
                }
            ],
            { cancelable: false }
        )
    }

    useEffect(() => {
        firebase.database().ref('todos/').on('value', snapshot => {
            if (snapshot.exists()) {
                const tasks = []
                snapshot.forEach(childSnapshot => {
                    const task = childSnapshot.val();
                    task.key = childSnapshot.key;
                    tasks.push(task)
                })
                setToDoTasks(tasks)
            }
            else {
                setToDoTasks([])
            }
            setLoading(false);
        })
    }, [])

    return (
        <View style={styles.container}>
            <AddNewTaskModal visible={addNewTaskModalVisible} closeModal={() => setAddNewTaskModalVisible(false)} addNewTask={addNewTask} />
            <EditTaskModal visible={editTaskModalVisible} selectedTask={selectedTask} closeModal={() => setEditTaskModalVisible(false)} editTask={editTask} />
            <TitleBar icon='ios-add-circle' style={styles.titleBar} title='To-Do' handlePress={() => setAddNewTaskModalVisible(true)} />
            <ScrollView>
                {
                    loading ? <ActivityIndicator style={styles.spinner} size='small' color={Colors.primary} />
                        : (toDoTasks.length !== 0 ? toDoTasks.map((item, index) => (
                            <TodoTaskBar
                                key={index}
                                style={styles.taskBar}
                                title={item.title}
                                handleComplete={completeTask(item)}
                                handleEdit={openEditModal(item)}
                                handleDelete={deleteTask(item)}
                            />
                        )) : <StyledText style={styles.defaultText}>No task available...</StyledText>)

                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    spinner: {
        marginTop: 20
    },
    titleBar: {
        marginBottom: 6
    },
    taskBar: {
        marginBottom: 6,
    },
    defaultText: {
        paddingVertical: 15,
        paddingHorizontal: 15,
    }
});
export default TodoTaskScreen;
