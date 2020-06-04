import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Google from 'expo-google-app-auth';
import Colors from '../../constants/Colors';
import StyledText from '../general/StyledText';
import { setUsername } from '../../actions/auth.action';
import googleOAuthClient from '../../config/google-oauth-client';

const IOS_CLIENT_ID = googleOAuthClient.ios.id;
const ANDROID_CLIENT_ID = googleOAuthClient.android.id;
const GoogleButton = ({ setUsername }) => {

    const navigation = useNavigation();
    const signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: IOS_CLIENT_ID,
                androidClientId: ANDROID_CLIENT_ID,
                scopes: ['profile', 'email']
            });

            if (result.type === 'success') {
                //after Google login redirect to Main
                const username = result.user.name.toLowerCase().replace(/ /g, '-');
                setUsername('user-' + username)
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: 'Main' }],
                    })
                );
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log('Error with login', e);
            return { error: true };
        }
    };

    return (
        <TouchableOpacity onPress={signInWithGoogle} style={styles.container}>
            <Icon name='google' style={styles.icon} size={25} />
            <StyledText style={styles.text}>Login with Google</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        paddingVertical: 20,
        height: 'auto',
        backgroundColor: Colors.googleRed,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5
    },
    icon: {
        color: 'white',
        marginRight: 20
    },
    text: {
        color: 'white'
    }
});

export default connect(null, { setUsername })(GoogleButton);
