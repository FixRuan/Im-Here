import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Plus } from 'phosphor-react-native';


import {
    Container,
    Project,
    ProjectTitle,
    ProjectDate,
    ProjectAdd,
    Input,
    AddButton,
} from './styles';


export function Home() {
    return (
        <Container>
            <StatusBar translucent style='light' />

            <Project>
                <ProjectTitle>Nome do projeto</ProjectTitle>
                <ProjectDate>18/08/2022</ProjectDate>
            </Project>

            <ProjectAdd>
                <Input placeholder="Nome do Participante" />
                <AddButton>
                    <Plus size={28} color="#FFFFFF" />
                </AddButton>
            </ProjectAdd>

        </Container>
    )
}