import React, { useState } from 'react';
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
    Participants,
    Title,
} from './styles';
import { ParticipantCard } from '../../components/ParticipantCard';
import { FlatList } from 'react-native';


export function Home() {
    const [participants, setParticipants] = useState([
        {
            id: '1',
            name: 'Ruan Pablo'
        },
        {
            id: '2',
            name: 'Pablo'
        }
    ]);


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

            <Participants>
                <Title>Participantes</Title>

                <FlatList
                    data={participants}
                    renderItem={({ item }) => <ParticipantCard key={item.id} />}
                />
            </Participants>

        </Container>
    )
}