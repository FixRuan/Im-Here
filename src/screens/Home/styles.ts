import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Project = styled.View`
    margin-top: 60px;
    padding: 0 24px;
`;

export const ProjectTitle = styled.Text`
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.white};
`;

export const ProjectDate = styled.Text`
    margin-top: 4px;
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.gray};
`;
