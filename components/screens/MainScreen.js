import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import TitleBar from '../layout/TitleBar';
import AddNewTaskBar from '../layout/AddNewTaskBar';
import TaskBar from '../layout/TaskBar';
import DoneTaskBar from '../layout/DoneTaskBar';

const TASKS = [
    { title: 'First Item' },
    { title: 'Second Item' },
    { title: 'Third Item' },
];

const COMPLETED = [
    { title: 'System Design' },
    { title: 'Planning' },
];

const MainScreen = ({ navigation }) => {
    const [taskCollapsed, setTaskCollapsed] = useState(false);
    const [doneCollapsed, setDoneCollapsed] = useState(false);
    const handleCollapsed = section => () => {
        section == 'task' ? setTaskCollapsed(!taskCollapsed) : setDoneCollapsed(!doneCollapsed);
    }
    const goTo = name => () => navigation.navigate(name)

    return (
        <ScrollView style={styles.container}>
            <TitleBar expansible={true} style={styles.titleBar} title='Tasks' handleCollapsed={handleCollapsed('task')} />
            <AddNewTaskBar icon='add' title='Add New Task' style={styles.actionBar} handlePress={goTo('AddNewTask')} />
            <Collapsible collapsed={taskCollapsed}>
                <View style={styles.taskContainer}>
                    {TASKS.map((item, index) => (
                        <TaskBar key={index} style={styles.taskBar} title={item.title} handlePress={() => { }} />
                    ))}
                </View>
            </Collapsible>
            <TitleBar expansible={true} style={styles.titleBar} title='Done' handleCollapsed={handleCollapsed('done')} />
            <Collapsible collapsed={doneCollapsed}>
                <View style={styles.taskContainer}>
                    {COMPLETED.map((item, index) => (
                        <DoneTaskBar key={index} style={styles.taskBar} title={item.title} handlePress={() => { }} />
                    ))}
                </View>
            </Collapsible>
            <View style={styles.spacer}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    titleBar: {
        marginBottom: 6
    },
    actionBar: {
        marginBottom: 6,
    },
    taskBar: {
        marginBottom: 6,
    },
    taskContainer: {
        marginBottom: 20
    },
    spacer: {
        height: 100
    }
});
export default MainScreen;
