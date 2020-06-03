import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import Colors from '../../constants/Colors';
import TitleBar from '../layout/TitleBar';
import CompletedTaskBar from '../layout/CompletedTaskBar';
import StyledText from '../general/StyledText';

const CompletedTaskScreen = () => {
    const [loading, setLoading] = useState(true)
    const [completedTasks, setCompletedTasks] = useState([]);
    const handleClearCompleted = () => {
        Alert.alert(
            `Clear All`,
            'Are you sure you clear all completed tasks?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        firebase.database().ref('/completed').remove();
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
    const revertCompletedTask = task => () => {
        Alert.alert(
            `Completed Task - ${ task.title }`,
            'Are you sure you wanna revert this?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        firebase.database().ref(`completed/${ task.key }`).remove()
                        firebase.database().ref(`todos/`).push({ title: task.title })
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
    const deleteCompletedTask = task => () => {
        Alert.alert(
            `Completed Task - ${ task.title }`,
            'Are you sure you wanna delete this?',
            [
                {
                    text: 'Yes',
                    onPress: () => firebase.database().ref(`completed/${ task.key }`).remove(),
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
        firebase.database().ref('completed/').on('value', snapshot => {
            if (snapshot.exists()) {
                const tasks = []
                snapshot.forEach(childSnapshot => {
                    const task = childSnapshot.val();
                    task.key = childSnapshot.key;
                    tasks.push(task)
                })
                setCompletedTasks(tasks)
            }
            else {
                setCompletedTasks([])
            }
            setLoading(false);
        })
    }, [])

    return (
        <View style={styles.container}>
            <TitleBar icon={completedTasks.length !== 0 ? 'md-trash' : 'ios-remove-circle'} style={styles.titleBar} title='Completed' handlePress={() => completedTasks.length !== 0 && handleClearCompleted()} />
            <ScrollView>
                {
                    loading ? <ActivityIndicator style={styles.spinner} size='small' color={Colors.primary} />
                        : (completedTasks.length !== 0 ? completedTasks.map((item, index) => (
                            <CompletedTaskBar
                                key={index}
                                style={styles.taskBar}
                                title={item.title}
                                handleRevert={revertCompletedTask(item)}
                                handleDelete={deleteCompletedTask(item)}
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
export default CompletedTaskScreen;
