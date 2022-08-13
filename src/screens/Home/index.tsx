import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';


export function Home() {
    return (
        <Container>
            <StatusBar translucent />
            <Text>Hello World</Text>
        </Container>
    )
}