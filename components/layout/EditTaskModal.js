import React, { useState, useEffect } from 'react'
import { View, Modal, StyleSheet } from 'react-native';
import TitleBar from '../layout/TitleBar';
import Colors from '../../constants/Colors';
import InputBar from './InputBar';
import SquareButton from '../buttons/SquareButton';


const EditTaskModal = ({ selectedTask, visible, closeModal, editTask }) => {
    const [newTitle, setNewTitle] = useState(selectedTask.title);
    const handleTitleChanged = newTitle => {
        setNewTitle(newTitle);
    }

    useEffect(() => {
        setNewTitle(selectedTask.title);
    }, [visible])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.container}>
                <TitleBar icon='ios-close-circle' style={styles.titleBar} title={`Edit Task - ${ selectedTask.title }`} handlePress={closeModal} />
                <InputBar
                    style={styles.input}
                    handleChange={handleTitleChanged}
                    placeholder={selectedTask.title}
                    maxLength={100}
                />
                <SquareButton style={styles.submitBtn} icon='save' handlePress={editTask(newTitle, selectedTask.key)} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    titleBar: {
        marginTop: 20
    },
    input: {
        borderColor: Colors.secondary,
        marginHorizontal: 10,
        color: Colors.secondary
    },
    cancelBtnOuterWrapper: {
        alignItems: 'center',
    },
    cancelBtnInnerWrapper: {
        flexDirection: 'row'
    },
    submitBtn: {
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: Colors.success
    }
})

export default EditTaskModal
