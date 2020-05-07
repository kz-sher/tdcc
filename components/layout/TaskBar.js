import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyledText from '../general/StyledText';
import Colors from '../../constants/Colors';


const TaskBar = ({ style = {}, title, locked = false, handlePress }) => {
    return (
        <TouchableOpacity style={[style, styles.container]} onPress={handlePress}>
            <Icon name='pageview' style={styles.view} size={25} />
            <StyledText style={styles.text}>{title}</StyledText>
            {locked && <Icon name='lock' style={styles.lock} size={25} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    view: {
        color: Colors.primary,
        marginRight: 10
    },
    text: {
        flex: 1
    },
    lock: {
        color: Colors.primary,
    }
});

export default TaskBar;
