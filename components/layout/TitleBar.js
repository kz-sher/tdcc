import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledText from '../general/StyledText';
import Colors from '../../constants/Colors';

const TitleBar = ({ style = {}, title, expansible = false, handleCollapsed }) => {
    return (
        <View style={[styles.title, style]}>
            <StyledText style={styles.text}>{title}</StyledText>
            {expansible &&
                <TouchableOpacity onPress={handleCollapsed}>
                    <Icon name='chevron-down' style={styles.icon} size={28} />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3
    },
    text: {
        flex: 1
    },
    icon: {
        color: Colors.primary,
    }
});

export default TitleBar;
