import styled from 'styled-components/native'

export const RegisterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 5px;
`

export const RegisterTypeButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${props => (props.checked ? '#fff' : '#e7e7e7')};
  width: 47%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-width: 1.5px;
  border-color: ${props => (props.checked ? '#3b3dbf' : 'transparent')};
`

export const RegisterLabel = styled.Text`
  font-size: 17px;
  margin-left: 8px;
`
