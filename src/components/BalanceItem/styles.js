import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #${props => props.bg};
  margin-top: 14px;
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 5px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`

export const Label = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

export const Balance = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-top: 5px;
`
