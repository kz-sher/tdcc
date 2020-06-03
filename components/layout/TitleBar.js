import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyledText from '../general/StyledText';
import Colors from '../../constants/Colors';

const TitleBar = ({ style = {}, title, icon = '', handlePress }) => {
    return (
        <View style={[styles.title, style]}>
            <StyledText style={styles.text}>{title}</StyledText>
            {!!icon &&
                <TouchableOpacity onPress={handlePress}>
                    <Icon name={icon} style={styles.icon} size={28} />
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
        color: Colors.secondary,
        flex: 1
    },
    icon: {
        color: Colors.secondary,
    }
});

export default TitleBar;
