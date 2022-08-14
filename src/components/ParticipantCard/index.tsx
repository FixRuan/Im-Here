import React from "react";
import { Text } from "react-native";

import { Container, RemoveButton, Name } from "./styles";

import { Minus } from 'phosphor-react-native'

interface CardProps {
    name: string;
    onRemove: () => void;
}


export function ParticipantCard({ name, onRemove }: CardProps) {
    return (
        <Container>
            <Name>{name}</Name>
            <RemoveButton onPress={onRemove}>
                <Minus size={32} color="#FFFFFF" />
            </RemoveButton>
        </Container>
    )
}