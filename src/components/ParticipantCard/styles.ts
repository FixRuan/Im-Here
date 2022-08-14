import styled from 'styled-components/native'

export const Container = styled.View`
   width: 100%;
   height: 52px;
   background-color: ${({theme}) => theme.colors.shape};
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   border-radius: 2px;
   margin-bottom: 12px;
`;

export const RemoveButton = styled.TouchableOpacity`
    height: 52px;
    width: 62px;
    background-color: ${({theme}) => theme.colors.red};
    border-radius: 2px;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.Text`
    margin-left: 18px;
    font-size: 18px;
    color: ${({theme}) => theme.colors.white};
`;