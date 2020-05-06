import React from 'react';
import { Text } from 'react-native';
import Colors from '../../constants/Colors';

const StyledText = (props) => {
    const weight = props.weight || 'regular';
    const defaultStyles = {
        fontFamily: `montserrat-${ weight }`,
        color: Colors.primary
    };
    return (
        <Text {...props} style={[defaultStyles, props.style]} />
    )
}

export default StyledText;
