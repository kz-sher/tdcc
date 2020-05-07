import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Svg, Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyledText from '../general/StyledText';
import Colors from '../../constants/Colors';


const DoneTaskBar = ({ style = {}, title = '', handlePress }) => {
    return (
        <View style={[style, styles.container]} onPress={handlePress}>
            <TouchableOpacity style={styles.titleWrapper} onPress={handlePress}>
                <Svg height={8} width={8} style={styles.dot}>
                    <Circle cx={4} cy={4} r={4} fill={Colors.primary} />
                </Svg>
                <StyledText weight='semibold'>{title}</StyledText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <Icon name='undo' style={styles.undo} size={25} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dot: {
        marginLeft: 5,
        marginRight: 10
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    undo: {
        color: Colors.primary,
        marginRight: 10
    },
});

export default DoneTaskBar;
