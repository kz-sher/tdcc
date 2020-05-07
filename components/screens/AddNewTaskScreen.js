import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TitleBar from '../layout/TitleBar';
import InputBar from '../layout/InputBar';
import SquareButton from '../buttons/SquareButton';
import StyledText from '../general/StyledText';
import Colors from '../../constants/Colors';

const AddNewTaskScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <TitleBar style={styles.title} title='New Task' />
            <View style={styles.label}>
                <StyledText>Title</StyledText>
            </View>
            <InputBar
                style={styles.input}
                maxLength={40}
                handleChange={() => { }}
            />
            <View style={styles.label}>
                <StyledText>Description</StyledText>
            </View>
            <InputBar
                style={[styles.input, styles.descInput]}
                maxLength={500}
                handleChange={() => { }}
                multiline={true}
            />
            <View style={styles.btnContainer}>
                <SquareButton
                    icon='save'
                    style={styles.saveTaskBtn}
                    handlePress={() => { }}
                />
                <SquareButton
                    icon='close'
                    style={styles.clearTaskBtn}
                    handlePress={() => { }}
                />
            </View>
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
    title: {
        marginBottom: 20
    },
    label: {
        justifyContent: 'center',
        marginBottom: 20,
        marginLeft: 10
    },
    input: {
        marginBottom: 15,
    },
    descInput: {
        height: 200,
    },
    btnContainer: {
        flexDirection: 'row'
    },
    saveTaskBtn: {
        backgroundColor: Colors.success,
        marginRight: 10
    },
    clearTaskBtn: {
        backgroundColor: Colors.info,
    }
});

export default AddNewTaskScreen;