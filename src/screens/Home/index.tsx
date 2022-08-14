import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import uuidv4 from 'uuid/v4';

import { ParticipantCard } from '../../components/ParticipantCard';
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

interface Participants {
    id: string;
    name: string;
}


export function Home() {
    const [participants, setParticipants] = useState([]);
    const [name, setName] = useState('');

    function handleAddParticipant() {
        const id = uuidv4();
        setParticipants(oldState => [...oldState, { id, name }]);

        setName('');
        Keyboard.dismiss();
    }

    function handleRemoveParticipant(id: string) {
        setParticipants(participants => participants.filter(participant => participant.id !== id));
    }

    return (
        <Container>
            <StatusBar translucent style='light' />

            <Project>
                <ProjectTitle>Nome do projeto</ProjectTitle>
                <ProjectDate>18/08/2022</ProjectDate>
            </Project>

            <ProjectAdd>
                <Input
                    placeholder="Nome do Participante"
                    onChangeText={setName}
                    value={name}
                />

                <AddButton onPress={handleAddParticipant}>
                    <Plus size={28} color="#FFFFFF" />
                </AddButton>
            </ProjectAdd>

            <Participants>
                <Title>Participantes</Title>

                <FlatList
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    data={participants}
                    renderItem={({ item }) =>
                        <ParticipantCard
                            onRemove={() => handleRemoveParticipant(item.id)}
                            name={item.name}
                            key={item.id}
                        />}
                />
            </Participants>

        </Container>
    )
}