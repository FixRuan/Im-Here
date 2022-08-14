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

export const ProjectAdd = styled.View`
    padding: 0px 24px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-top: 26px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#3C3A3F'
})`
    height: 56px;
    width: 80%;
    background-color: ${({theme}) => theme.colors.shape};
    color: ${({theme}) => theme.colors.white};
    font-size: 16px;
    padding: 0px 12px;
    border-radius: 4px;
`;

export const AddButton = styled.TouchableOpacity`
    height: 56px;
    width: 20%;
    background-color: ${({theme}) => theme.colors.green};
    margin-left: 8px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;