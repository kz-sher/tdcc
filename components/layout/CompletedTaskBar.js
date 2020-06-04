import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledText from '../general/StyledText';
import Colors from '../../constants/Colors';
import SquareButton from '../buttons/SquareButton';


const CompletedTaskBar = ({ style = {}, locked = false, title, handleRevert, handleDelete }) => {
    return (
        <View style={[style, styles.container]}>
            <View style={styles.textContainer}>
                <TouchableOpacity disabled={locked} onPress={handleRevert}>
                    <StyledText>{title}</StyledText>
                </TouchableOpacity>
            </View>
            {
                locked ? <SquareButton icon='lock' disabled={true} style={styles.lock} handlePress={() => { }} />
                    : <>
                        <SquareButton icon='undo' style={styles.edit} handlePress={handleRevert} />
                        <SquareButton icon='close' style={styles.close} handlePress={handleDelete} />
                    </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
    },
    dot: {
        marginLeft: 5,
        marginRight: 10
    },
    view: {
        color: Colors.primary,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    lock: {
        backgroundColor: Colors.primary,
    },
    edit: {
        backgroundColor: Colors.success,
        marginRight: 6,
        flexGrow: 0
    },
    close: {
        backgroundColor: Colors.googleRed,
    },
});

export default CompletedTaskBar;
