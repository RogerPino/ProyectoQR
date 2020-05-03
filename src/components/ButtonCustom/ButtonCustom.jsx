import React from 'react';
import { Button, Text } from 'native-base';

function ButtonCustom (props) {
    return <Button {...props}><Text>{props.children}</Text></Button>
}

export default ButtonCustom;

