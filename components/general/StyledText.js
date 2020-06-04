import React from 'react';
import { Text } from 'react-native';
import Colors from '../../constants/Colors';

const StyledText = (props) => {
    const weight = props.weight || 'semibold';
    const defaultStyles = {
        fontFamily: `montserrat-${ weight }`,
        color: Colors.secondary
    };
    return (
        <Text {...props} style={[defaultStyles, props.style]} />
    )
}

export default StyledText;
