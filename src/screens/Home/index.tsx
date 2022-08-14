import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import {
    Container,
    Project,
    ProjectTitle,
    ProjectDate,
} from './styles';


export function Home() {
    return (
        <Container>
            <StatusBar translucent style='light' />

            <Project>
                <ProjectTitle>Nome do projeto</ProjectTitle>
                <ProjectDate>18/08/2022</ProjectDate>
            </Project>

        </Container>
    )
}