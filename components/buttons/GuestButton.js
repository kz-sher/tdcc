import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import StyledText from '../general/StyledText';

const GuestButton = () => {
    const navigation = useNavigation();
    const handlePress = () => navigation.navigate('guest-login');
    return (
        <TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
            <Icon name='person' style={styles.btnIcon} size={25} />
            <StyledText weight='semibold' style={styles.btnText}>Login as Guest</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginHorizontal: 20,
        paddingVertical: 20,
        height: 'auto',
        backgroundColor: Colors.success,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnIcon: {
        color: 'white',
        marginRight: 20
    },
    btnText: {
        color: 'white'
    }
});

export default GuestButton;
