import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import StyledText from '../general/StyledText';

const HeaderLeft = ({ canGoBack, onPress, username }) => {
    return (
        <View style={styles.header}>
            {canGoBack &&
                <TouchableOpacity onPress={onPress}>
                    <Icon name='chevron-left' style={styles.headerIcon} size={30} />
                </TouchableOpacity>
            }
            <View style={styles.header}>
                <Icon name='account-circle-outline' style={styles.headerIcon} size={25} />
                <StyledText weight='semibold' style={styles.headerTxt}>{username || 'Guest'}</StyledText>
            </View>
        </View>
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
        marginLeft: 10
    },
    headerTxt: {
        marginLeft: 20
    }
});

const mapStateToProps = state => ({
    username: state.auth.username,
});

export default connect(mapStateToProps, null)(HeaderLeft);
