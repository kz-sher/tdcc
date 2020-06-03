import React from 'react';
import { connect } from 'react-redux';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import { logout } from '../../actions/auth.action';

const HeaderRight = ({ logout }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        Alert.alert(
            `Logout`,
            'Are you sure you wanna logout?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 1,
                                routes: [{ name: 'Home' }],
                            })
                        );
                        logout();
                    },
                },
                {
                    text: 'No',
                    onPress: () => { }
                }
            ],
            { cancelable: false }
        )
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.header}>
            <Icon name='exit-to-app' style={styles.headerIcon} size={28} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerIcon: {
        color: Colors.primary,
        paddingHorizontal: 10
    },
});
export default connect(null, { logout })(HeaderRight);
