import styled from 'styled-components/native'

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4ff;
`

export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 8px;
  font-size: 17px;
`

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 5px;
  margin-top: 10px;
`

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`
