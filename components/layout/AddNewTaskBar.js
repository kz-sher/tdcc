import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyledText from '../general/StyledText';
import Colors from '../../constants/Colors';

const AddNewTaskBar = ({ style = {}, icon = 'add', title = '', handlePress }) => {
    return (
        <TouchableOpacity style={[style, styles.container]} onPress={handlePress}>
            <Icon name={icon} style={styles.icon} size={25} />
            <StyledText weight='semibold' style={styles.text}>{title}</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    icon: {
        color: Colors.primary,
        marginRight: 10
    },
    text: {
        flex: 1
    }
});

export default AddNewTaskBar;