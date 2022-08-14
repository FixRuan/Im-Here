import React from "react";
import { Text } from "react-native";

import { Container, RemoveButton, Name } from "./styles";

import { Minus } from 'phosphor-react-native'


export function ParticipantCard() {
    return (
        <Container>
            <Name>Ruan Pablo</Name>
            <RemoveButton>
                <Minus size={32} color="#FFFFFF" />
            </RemoveButton>
        </Container>
    )
}