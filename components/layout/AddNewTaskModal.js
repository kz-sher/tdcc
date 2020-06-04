import React, { useState, useEffect } from 'react'
import { View, Modal, StyleSheet } from 'react-native';
import TitleBar from '../layout/TitleBar';
import Colors from '../../constants/Colors';
import InputBar from './InputBar';
import SquareButton from '../buttons/SquareButton';


const AddNewTaskModal = ({ visible, closeModal, addNewTask }) => {
    const [title, setTitle] = useState('Untitled');
    const handleTitleChanged = newTitle => {
        setTitle(newTitle);
    }

    useEffect(() => {
        setTitle('Untitled');
    }, [visible])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.container}>
                <TitleBar icon='ios-close-circle' style={styles.titleBar} title='Add New Task' handlePress={closeModal} />
                <InputBar
                    style={styles.input}
                    handleChange={handleTitleChanged}
                    placeholder='Untitled'
                    maxLength={100}
                />
                <SquareButton style={styles.submitBtn} icon='playlist-add' handlePress={() => { console.log('asd'); addNewTask(title)() }} />
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

export default AddNewTaskModal
